import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://127.0.0.1:5500/index.html");

  // Locators is a new experimental API that combines waitForSelector
  // and element actions in a single unit.
  // In combination with additional precondition 
  // checks this allows locators to retry failed actions 
  // automatically leading to less flaky automation scripts.

  await page.locator('button').click()

  //-----------------------------------------------------

  //use href event with variable
  // const href = await page.$('a');//with tag
  // await href.click();


  //click all buttons event 
  // const buttons = await page.$$(".btn")//return as array all buttons
  // console.log(buttons)

  // await buttons[0].click()
  // await buttons[1].click()
  // await buttons[2].click()

  // await browser.close()
})();
