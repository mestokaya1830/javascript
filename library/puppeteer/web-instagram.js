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
  await page.goto("http://www.instagram.com")
  await page.screenshot({ path: `./media/instagram.png` })

  //accept cockie
  await page.locator('._a9--._a9_0').click()

  //login
  await page.locator('[name="username"]').fill('mestobidik')
  await page.locator('[name="password"]').fill('@mk1972mk@')

  //login button
  await new Promise((resolve) => setTimeout(resolve, 1000))
  await page.locator('._acan._acap._acas._aj1-').click()

  //save profile model
  await page.locator('._ac8f').click()

  //notification model
  await page.locator('._a9--._a9_1').click()

  //goto cars page
  await page.goto('https://www.instagram.com/explore/tags/cars/')

  //select all href on cars page
  await page.waitForSelector('._aabd._aa8k._al3l a')
  const links = await page.$$eval('._aabd._aa8k._al3l a', item => item.map(item => item.href))
  console.log(links)

  //goto selected post
  for (const item of links) {
    await page.goto(item)
    //like selected post
    await new Promise((resolve) => setTimeout(resolve, 1000))
    await page.locator('.xp7jhwk > div').click()
  }

  await browser.close()
})()
