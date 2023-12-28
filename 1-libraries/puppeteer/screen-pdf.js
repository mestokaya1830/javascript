import puppeteer from "puppeteer";

(async () => {
  const browser = await puppeteer.launch({headless: false})
  const page = await browser.newPage();
  await page.setViewport({ width: 1000, height: 500 });
  await page.goto("http://books.toscrape.com");

  await new Promise((resolve) => setTimeout(resolve, 1000))
  await page.emulateMediaType('screen')
  await page.pdf({
    format: 'A4',
    fullPage: true,
    printBackground: true,
    // pageRanges: '1',//get only one page
    path: './media/screen.pdf'
  })
  //simple way
  // await page.pdf({
  //   path: "javascript.pdf",
  // });

  await browser.close()

})()
