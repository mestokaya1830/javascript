import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://127.0.0.1:5500/index.html")

  //$$ function return all buttons as array
  const buttons = await page.$$(".btn")
  console.log(buttons)

  await buttons[0].click()
  // await buttons[1].click()
  // await buttons[2].click()

  // await browser.close()
})();