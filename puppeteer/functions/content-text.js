import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("https://dev.to/search?q=nodejs");


  //$eval return only one element
  await page.waitForSelector('.crayons-title')
  const item = await page.$eval('.crayons-title', item => item.innerText)
  console.log(item)

  await browser.close()
})()