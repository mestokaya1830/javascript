import puppeteer from "puppeteer"
import fs from 'fs'

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto("https://dev.to/search?q=nodejs")

  await page.waitForSelector('.crayons-story__title')
  const result = await page.$$eval('.crayons-story__title > a', item => item.map(item => item.href))//all title
  
  fs.writeFileSync('./media/lessons.json', JSON.stringify(result), null, 2)
  await browser.close()
})()