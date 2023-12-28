import puppeteer from "puppeteer"
import fs from 'fs'

(async () => {

  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://www.ebay.com/')

  //search dell laptop
  await page.waitForSelector('#gh-ac')
  await page.type('#gh-ac', 'dell laptop')
  await page.click('#gh-btn')

  //get prices of dell laptop
  await page.waitForSelector('.s-item__wrapper')
  const result = await page.$$eval('.s-item__wrapper', item => item.map(item => ({
    image:item.querySelector('img').src,
    link:item.querySelector('a').href,
    price:item.querySelector('.s-item__price').innerText
  })))
  
  fs.writeFileSync('./media/ebay.json', JSON.stringify(result), null ,2)
  await browser.close()
})()