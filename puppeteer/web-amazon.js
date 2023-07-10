import puppeteer from "puppeteer";
import fs from 'fs'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto('https://www.amazon.com/s?i=specialty-aps&bbn=16225007011&rh=n%3A16225007011%2Cn%3A13896617011&ref=nav_em__nav_desktop_sa_intl_computers_tablets_0_2_6_4')

  await page.waitForSelector('.s-card-container > .a-section')
  const computers = await page.$$eval('.s-card-container > .a-section', item => item.map(item => ({
    links:item.querySelector('.s-product-image-container span a').href,
    images:item.querySelector('.s-product-image-container span img').src,
    product:item.querySelector('.a-section:first-child > h2 > a > span').innerText,
    rate:item.querySelector('.a-section:first-child + div').innerText,
    price:item.querySelector(".a-section > :first-child + div + div").innerText,
  })))


  fs.writeFileSync('./media/amazon.json', JSON.stringify(computers), null, 2)
  await browser.close()
})()