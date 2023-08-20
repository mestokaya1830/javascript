import puppeteer from "puppeteer"
import fs from "fs"
import { setInterval } from "timers/promises";

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.setViewport({
    width: 1280,
    height: 800,
    isMobile: false,
  });

  //login section------------------------------------------
  await page.goto("https://twitter.com/login");

  await page.locator('[autocomplete="username"]').fill('mesto1830@outlook.com')
  const [button] = await page.$x("//span[contains(., 'Next')]");
  await button.click();

  await page.locator('[name="text"]').fill("mestokaya")
  const el = await page.$('[data-testid="ocfEnterTextNextButton"]')
  await el.click()

  await page.locator('[name="password"]').fill('mk1972mk11130113')
  const [login] = await page.$x("//span[contains(., 'Log in')]")
  await login.click()
  await page.waitForNavigation()

  //tweet section--------------------------------------
  await page.goto("https://twitter.com/fatmasahin", { waitUntil: "networkidle2", });

  const result = await autoScroll(page, 10)
  fs.writeFileSync("./media/web-twitter.json", JSON.stringify(result), null, 2)
  await browser.close()
})()


async function autoScroll(page, tweetLimit) {
  let tweets = {}
  const getTweets = async () => {
    await page.waitForSelector('article')
    await new Promise((resolve) => setTimeout(resolve, 1000))
    tweets = await page.$$eval('article', item => item.map(item => ({
      user: item.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2.r-dnmrzs > div > a > div > div.css-901oao.r-1awozwy.r-18jsvk2.r-6koalj.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-bcqeeo.r-1udh08x.r-3s2u2q.r-qvutc0').innerText,
      tweet: item.querySelector('[data-testid="tweetText"]').innerText.split('\n').join(''),
      replay: item.querySelector('div:nth-child(1) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span').innerText,
      retweet: item.querySelector('div:nth-child(2) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span').innerText,
      like: item.querySelector('div:nth-child(3) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span').innerText,
      view: item.querySelector('div:nth-child(4) > a > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span').innerText
    })))
  }
  await page.exposeFunction("getTweets", getTweets)
  await page.evaluate(async () => {
    await new Promise((resolve, reject) => {
      let totalHeight = 0
      const distance = 1000
      let tweetCount = 0
      console.log(tweetCount)
      const timer = setInterval(async () => {
        getTweets()
        // var scrollHeight = document.body.scrollHeight
        window.scrollBy(0, distance)
        totalHeight += distance;
        tweetCount++
        // if (totalHeight >= scrollHeight) {
        if (tweetCount >= 10) {
          clearInterval(timer)
          resolve()
        }
      }, 2000)
    })
  })
  return tweets
}