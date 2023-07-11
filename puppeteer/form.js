import puppeteer from "puppeteer-extra"
import stealth from 'puppeteer-extra-plugin-stealth'
import { executablePath } from "puppeteer"

(async () => {
  puppeteer.use(stealth())
  const browser = await puppeteer.launch({
    headless: false,
    executablePath: executablePath()
  })
  const page = await browser.newPage()
  await page.goto("http://localhost:5500/form.html")
  // await new Promise((resolve) => setTimeout(resolve, 500))
  await page.screenshot({ path: `./media/form.png` })

  // Locators is a new experimental API that combines waitForSelector
  // and element actions in a single unit.
  // In combination with additional precondition 
  // checks this allows locators to retry failed actions 
  // automatically leading to less flaky automation scripts
  
  //login
  // await page.waitForSelector('#name');
  // await page.type('#name', 'mestozinar', { delay: 50 })
  //or use locator-----------------------
  await page.locator('#name').fill('mestokaya')

  // await page.waitForSelector('#password');
  // await page.type('#password', 'mk1972mk', { delay: 50 })
  //or use locator-----------------------
  await page.locator('#password').fill('mk1972mk')

  // await new Promise((resolve) => setTimeout(resolve, 500))
  //login button
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await page.locator('#login').click()
  await page.goto('https://dev.to/')
  // await browser.close()
})()
