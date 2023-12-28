import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("https://dev.to/")

  await page.goto("https://dev.to/search?q=nodejs")
  await new Promise(resolve => setTimeout(resolve, 2000))
  await page.goBack()
  
  // await browser.close()
})()