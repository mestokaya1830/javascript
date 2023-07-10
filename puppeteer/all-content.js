import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({headless: false,devtools: true,})
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("https://dev.to/");

  const content = await page.content();
  console.log(content)
  await browser.close()
  
})()

