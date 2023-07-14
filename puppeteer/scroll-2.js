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
  await page.evaluate(autoScroll)
  await browser.close()
})()

async function autoScroll() {
  await new Promise(resolve => {
    let distance = 100
    const timer = setInterval(() => {
      document.scrollingElement.scrollBy(0, distance);
      if (document.scrollingElement.scrollTop + window.innerHeight >= document.scrollingElement.scrollHeight) {
        clearInterval(timer);
        resolve()
      }
    }, 100);
  });
}