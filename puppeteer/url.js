import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("https://dev.to/");

  const url = await page.url();
  console.log(url)
  await browser.close()
})()
