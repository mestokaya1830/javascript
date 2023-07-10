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
  // await new Promise((resolve) => setTimeout(resolve, 500))
  await page.screenshot({ path: `./media/instagram.png` })

  //accept cockie
  await page.waitForSelector('._a9--._a9_0')
  await page.click('._a9--._a9_0')

  //login
  await page.waitForSelector('[name="username"]');
  await page.type('[name="username"]', 'mestozinar', { delay: 50 })

  await page.waitForSelector('[name="password"]');
  await page.type('[name="password"]', 'mk1972mk', { delay: 50 })

  await new Promise((resolve) => setTimeout(resolve, 500))
  await page.waitForSelector('._acan._acap._acas._aj1-')
  await page.click('._acan._acap._acas._aj1-')

  //save profile module
  await page.waitForSelector('._ac8f')
  await page.click('._ac8f')

  //notification module
  await page.waitForSelector('._a9--._a9_1')
  await page.click('._a9--._a9_1')

  //goto cars page
  await page.goto('https://www.instagram.com/explore/tags/cars/')

  //select all href on cars page
  await page.waitForSelector('._aabd._aa8k._al3l a')
  const links = await page.$$eval('._aabd._aa8k._al3l a', item => item.map(item => item.href))
  console.log(links)

  //goto selected post
  for (const item of links) {
    await page.goto(item)
    await new Promise((resolve) => setTimeout(resolve, 500))
    //like selected post
    await page.waitForSelector('.xp7jhwk > div')
    await page.click('.xp7jhwk > div')
  }

  await browser.close()
})()
