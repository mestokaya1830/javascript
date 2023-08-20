import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false, devtools: true, })
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://127.0.0.1:5500/0-basic/index.html");

  await page.waitForSelector('.table')
  const tableFilter = await page.$$eval('table tbody tr', item => item.map(item => ({
    Id: item.querySelectorAll('td')[0].innerText,
    name: item.querySelectorAll('td')[1].innerText,
    price: item.querySelectorAll('td')[2].innerText
  })))
  console.log(tableFilter);
  console.log('--------------------------------')
  
  await browser.close()
})()
