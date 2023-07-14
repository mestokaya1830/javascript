import puppeteer from "puppeteer-extra"
import stealth from 'puppeteer-extra-plugin-stealth'
import { executablePath } from "puppeteer"

let browser;
let page;
(async () => {
  puppeteer.use(stealth())
    browser = await puppeteer.launch({
    headless: false,
    executablePath: executablePath()
  })
  page = await browser.newPage()
  await page.goto('https://dev.to/')

  await autoScroll(page)
  await browser.close()
})()


async function autoScroll() {
  await page.evaluate(async() => {
    await new Promise(resolve => {
      let distance = 100
      let totalHeight = 0
      const timer = setInterval(() => {
        let scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        if(totalHeight >= scrollHeight){
          clearInterval(timer)
          resolve()
        }
      }, 100)
    })
  })
}