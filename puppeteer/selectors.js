import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://127.0.0.1:5500/index.html");

  //tag
  const tagSelector = await page.$eval('h2', item => item.innerText)
  console.log(tagSelector)

  //id
  const idSelector = await page.$eval('#price', item => item.innerText)
  console.log(idSelector)
  
  //class
  const classSelector = await page.$eval('.text-1', item => item.innerText)
  console.log(classSelector)

  //name
  const nameSelector = await page.$eval('[name="youtube"]', item => item.innerText)
  console.log(nameSelector)

  //data
  const dataSelector = await page.$eval('[data="python"]', item => item.innerText)
  console.log(dataSelector)
  
  //xpath
  const xpathSelector = await page.$x('/html/body/table/tbody/tr[1]/td[2]', item => item.innerText)
  console.log(xpathSelector)

  await browser.close()
})();
