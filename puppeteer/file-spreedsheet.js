import puppeteer from "puppeteer"
import xlsx from 'xlsx'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto("https://dev.to/search?q=nodejs")

  await page.waitForSelector('.crayons-story__title')
  const result = await page.$$eval('.crayons-story__title > a', item => item.map(item => item.href))//all title
  
  //create xslx file
  const links = result.map(item => [item])//need for spreedsheet
  const wb = xlsx.utils.book_new()
  const ws = xlsx.utils.aoa_to_sheet(links)
  xlsx.utils.book_append_sheet(wb, ws)
  xlsx.writeFile(wb, './media/links.xlsx')

  await browser.close()
})()