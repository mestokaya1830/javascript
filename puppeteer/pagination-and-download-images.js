import puppeteer from "puppeteer";
import fs from 'fs'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })


  //toscrape
  await page.goto('http://books.toscrape.com/')
  while(await page.$('.pager .next a')){
    let currentPage = await page.url()
    await getImages(page, currentPage)
    await page.click('.pager .next a')
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  // await browser.close()
})()
const getImages = async(page, url) => {
  page.on('response', async (response) => {
    const matches = /.*\.(jpg|png|svg|gif)$/.exec(response.url())
    if (matches) {
      const buffer = await response.buffer()
      fs.writeFileSync(`media/${matches[0].split('/').pop()}`, buffer, 'base64')
    }
  })
  await page.goto(url)
}