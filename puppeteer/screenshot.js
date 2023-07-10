import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("https://dev.to/");

  await page.screenshot({path: "./media/sreen1.png"})
  await page.screenshot({path: "./media/sreen2.png", type: 'jpeg'})
  await page.screenshot({path: "./media/sreen3.png", fullPage: true})
  await page.screenshot({path: "./media/sreen4.png", clip: {x:200,y:200,width:300,height:300}})
  
  await browser.close()

})()
