import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('https://bot.sannysoft.com/')
  await new Promise((resolve) => setTimeout(resolve, 500))
  await page.screenshot({path: `../images/test.png`})
  await browser.close()
})()


//or with self function
// puppeteer.launch({ headless: false }).then(async browser => {
//   const page = await browser.newPage()
//   await page.goto('https://bot.sannysoft.com/')
//   await new Promise((resolve) => setTimeout(resolve, 500))
//   await page.screenshot({path: `../images/test.png`})
//   await browser.close()
// })

