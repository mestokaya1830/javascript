import puppeteer from "puppeteer";


(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  page.setDefaultNavigationTimeout(2 * 60 * 1000)

  await page.goto('https://dev.to/')
  
  await page.waitForSelector('a')
  const allLinks = await page.$$eval('a', item => item.map(item => item.href))
  console.log(allLinks)

  await browser.close()
})()