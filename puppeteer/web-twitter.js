import puppeteer from"puppeteer"
import fs from"fs"

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
  await login.click();
  await page.waitForNavigation()

  //tweet section--------------------------------------
  await page.goto("https://twitter.com/fatmasahin", {waitUntil: "networkidle2",});

  await page.waitForSelector('.css-1dbjc4n.r-18u37iz')
  const tweets = await page.$$eval('article', item => item.map(item => ({
    user: item.querySelector('div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2.r-dnmrzs > div > a > div > div.css-901oao.r-1awozwy.r-18jsvk2.r-6koalj.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-bcqeeo.r-1udh08x.r-3s2u2q.r-qvutc0').innerText
  })))
  console.log(tweets)

  fs.writeFileSync('./media/web-twitter.json', JSON.stringify(tweets), null, 2)

//user
//'div.css-1dbjc4n.r-1awozwy.r-18u37iz.r-1wbh5a2.r-dnmrzs > div > a > div > div.css-901oao.r-1awozwy.r-18jsvk2.r-6koalj.r-37j5jr.r-a023e6.r-b88u0q.r-rjixqe.r-bcqeeo.r-1udh08x.r-3s2u2q.r-qvutc0'
//tweet
//'[data-testid="tweetText"]'
//replay
//'div:nth-child(1) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span'
//retweet
//'div:nth-child(2) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span'
//like
//'div:nth-child(3) > div > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span'
//view
//'div:nth-child(4) > a > div > div.css-1dbjc4n.r-xoduu5.r-1udh08x > span > span > span'
//images
//'article [data-testid="tweetPhoto"] img'


  // //title of first tweet
  // await page.waitForSelector(".css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0 > .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0");
  // const items = await page.evaluate(() => Array.from(document.querySelectorAll(".css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0 > .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0"),(item) => item.innerText));
  // console.log(items)
  
  // //click first tweet
  // const tweetLink = await page.$$('[data-testid="tweetText"]');
  // await tweetLink[0].click();


  //get first tweet likes dialog page
  // await page.waitForSelector(".css-4rbku5.css-18t94o4.css-901oao.r-18jsvk2.r-1loqt21.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0");
  // const link = await page.evaluate(() => Array.from(document.querySelectorAll(".css-4rbku5.css-18t94o4.css-901oao.r-18jsvk2.r-1loqt21.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0"),(item) => item.href));
  // let likesUrl = link[2];
  // if (link[2]) {
  //   likesUrl = link[2];
  // } else {
  //   likesUrl = link[1];
  // }
  // const users = []
  // await page.goto(`${likesUrl}`, { waitUntil: "networkidle2" });

  // //get all liked users from first-tweet dialog
  // const getUsers = async () => {
  //   users.push(await page.evaluate(() => Array.from(document.querySelectorAll('a > div > div > span > span'), item => item.innerText)))
  // }

  //likes dialog scroll
  // await page.exposeFunction("getUsers", getUsers);
  // try {
  //   console.log("Please wait...");
  //   const res = await page.$eval(".r-1dqxon3", (item) => {
  //     let distance = 1200;
  //     let totalHeight = 0;
  //     let timer = setInterval(() => {
  //       getUsers()
  //       item.scrollTop = item.scrollTop + distance;
  //       totalHeight += distance;
  //       if (totalHeight >= item.scrollHeight) {
  //         clearInterval(timer);
  //       }
  //       return item;
  //     }, 2000);
  //   });
  // } catch (e) {
  //   console.log(e);
  // }
  // setTimeout(() => {
  //   const finalUsers = (param) => Array.from(new Set(param))
  //   console.log(finalUsers(users.flat()))
  //   const usersLength = finalUsers(users.flat()).length
  //   console.log(usersLength)
  // }, 10000);
  //goto div bottom likes dialog scroll
    // const res = await page.$eval(".r-1dqxon3", (item) => {
    //   item.scrollTop = item.scrollHeight
    //   return item;
    // }, 2000);



  //-----------------------------------------get emails
  // const sel2 = 'a > div > div > span > span'
  // await page.waitForSelector(sel2);
  // const email = await page.evaluate(() => Array.from(document.querySelectorAll('a'), item => item.href))
  // const usersEmailUnquie = (param) => Array.from(new Set(param))
  // const usersEmail = usersEmailUnquie(email)
  // const all = []
  // usersName.forEach((key, value) => {
  //   all.push({name: key, email: usersEmail[value]})
  // });
  // await page.waitForNavigation();

  // fs.writeFileSync("./box.json", JSON.stringify(items), null, 2);
})();