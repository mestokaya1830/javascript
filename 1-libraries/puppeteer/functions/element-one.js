import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://127.0.0.1:5500/index.html");


  //$ function return only one element
  // const button = await page.$(".login")
  const button = await page.$("button")
  await button.click()

  // await browser.close()
})();