import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ 
    headless: false, 
    executablePath: '/opt/google/chrome/chrome' //in normal puppeteer use chromium but we use here chrome
  })
  const page = await browser.newPage()
  await page.goto('https://bot.sannysoft.com/')
  await new Promise((resolve) => setTimeout(resolve, 500))
  await page.screenshot({path: `./images/test.png`})
  await browser.close()
})()
