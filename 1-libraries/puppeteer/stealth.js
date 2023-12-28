import puppeteer from "puppeteer-extra"
import stealth from 'puppeteer-extra-plugin-stealth'
import { executablePath } from "puppeteer"

(async () => {
  puppeteer.use(stealth())
  const browser = await puppeteer.launch({ 
    headless: false,
    executablePath: executablePath()
  })
  const page = await browser.newPage()
  await page.goto('https://bot.sannysoft.com/')
  await new Promise((resolve) => setTimeout(resolve, 500))
  await page.screenshot({path: `./media/stealth.png`})
  await browser.close()
})()