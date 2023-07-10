import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://127.0.0.1:5500/index.html");

  //use click event with shorthand
  // await page.click('button');//with tag
  // await page.click('#msg');//with id
  // await page.click('.msg');//with class
  // await page.click('[name="msg"]');//with name
  // await page.click('[data="msg"]');//with data

  //-----------------------------------------------------

  //use href event with variable
  // const href = await page.$('a');//with tag
  // const href = await page.$('#youtube');//with id
  // const href = await page.$('.youtube');//with class
  // const href = await page.$('[name="youtube"]');//with name
  // const href = await page.$('[data="youtube"]');//with data
  // const href = await page.$x('//*[@id="msg"]');//with xpath
  // href[0].click()
  // await href.click();



  //click one button event
  const button = await page.$("button")//return only one button
  await button.click()


  //click all buttons event 
  // const buttons = await page.$$(".btn")//return as array all buttons
  // console.log(buttons)

  // await buttons[0].click()
  // await buttons[1].click()
  // await buttons[2].click()

  // await browser.close()
})();
