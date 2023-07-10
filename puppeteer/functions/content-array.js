import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("https://dev.to/search?q=nodejs");

  //$$eval return all content as array
  await page.waitForSelector('.search-results-loaded')
  const evelList = await page.$$eval('.search-results-loaded', item => item.map(item => item.innerText));
  console.log(evelList)

  //with parse
  await page.waitForSelector('.crayons-story__title')
  const parse = await page.$$eval('.crayons-story__title', item => item.map(item => ({
    links: item.querySelector('a').href
  })))
  console.log(parse)
  console.log(parse.length)

  await browser.close()
})()