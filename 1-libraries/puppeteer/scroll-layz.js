import puppeteer from "puppeteer"
import fs from 'fs'

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto("https://dev.to/")

  const result = await scrollPage(page, 500)
  fs.writeFileSync('./media/dev.json', JSON.stringify(result), null, 2)
  await browser.close()

})()

//page scroll function need lazy-loding-data
const scrollPage = async(page, itemCount) => {
  let items = []
  try {
    let previousHeight
    while (itemCount > items.length) {
      console.clear()
      console.log('Wait please...')
      previousHeight = await page.evaluate('document.body.scrollHeight')
      await page.evaluate('window.scrollTo(0, document.body.scrollHeight)')
      await page.waitForFunction(`document.body.scrollHeight > ${previousHeight}`)
      await new Promise((resolve) => setTimeout(resolve, 1000))
      items = await page.$$eval('.crayons-story__title > a', item => item.map(item => item.innerText))
    }
  } catch(e) { 
    console.log(e)
  }
  return items
}