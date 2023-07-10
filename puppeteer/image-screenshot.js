import puppeteer from "puppeteer"

(async () => {

  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.goto('http://books.toscrape.com/catalogue/a-light-in-the-attic_1000/index.html')

  const result = await page.$('.item.active')
  await result.screenshot({path: './media/screen.png'})
    
  await browser.close()
})()