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
  await page.goto('https://dev.to/')

  await page.evaluate(scrollToBottom)
  // await browser.close()
})()

//scroll to bottom
async function scrollToBottom() {
  await new Promise(resolve => {
    let distance = 100; // should be less than or equal to window.innerHeight
    const delay = 50;
    const timer = setInterval(() => {
      document.scrollingElement.scrollBy(0, distance);
      if (document.scrollingElement.scrollTop + window.innerHeight >= document.scrollingElement.scrollHeight) {
        clearInterval(timer);
        resolve();
      }
    }, delay);
  });
}


































// import puppeteer from"puppeteer"
// import fs from"fs"

// var browser = null;
// var page = null;

// (async () => {
//   browser = await puppeteer.launch({ headless: false });
//   page = await browser.newPage();
//   page.setViewport({
//     width: 1280,
//     height: 800,
//     isMobile: false,
//   });

//     //login section------------------------------------------
//     await page.goto("https://twitter.com/login");

//     await page.locator('[autocomplete="username"]').fill('mesto1830@outlook.com')
//     const [button] = await page.$x("//span[contains(., 'Next')]");
//     await button.click();
  
//     await page.locator('[name="text"]').fill("mestokaya")
//     const el = await page.$('[data-testid="ocfEnterTextNextButton"]')
//     await el.click()
  
//     await page.locator('[name="password"]').fill('mk1972mk11130113')
//     const [login] = await page.$x("//span[contains(., 'Log in')]")
//     await login.click()
//     await page.waitForNavigation()

//   //tweet section--------------------------------------
//   await page.goto("https://twitter.com/fatmasahin", {waitUntil: "networkidle2",});

//   //title of first tweet
//   await page.waitForSelector(".css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0 > .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0");
//   const items = await page.evaluate(() => Array.from(document.querySelectorAll(".css-901oao.r-18jsvk2.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-bnwqim.r-qvutc0 > .css-901oao.css-16my406.r-poiln3.r-bcqeeo.r-qvutc0"),(item) => item.innerText));
//   console.log(items)
  
//   //click first tweet
//   const tweetLink = await page.$$('[data-testid="tweetText"]');
//   await tweetLink[0].click();

//   //get first tweet likes dialog page
//   await page.waitForSelector(".css-4rbku5.css-18t94o4.css-901oao.r-18jsvk2.r-1loqt21.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0");
//   const link = await page.evaluate(() => Array.from(document.querySelectorAll(".css-4rbku5.css-18t94o4.css-901oao.r-18jsvk2.r-1loqt21.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0"),(item) => item.href));
//   let likesUrl = link[2];
//   if (link[2]) {
//     likesUrl = link[2];
//   } else {
//     likesUrl = link[1];
//   }
//   const users = []
//   await page.goto(`${likesUrl}`, { waitUntil: "networkidle2" });

//   //get all liked users from first-tweet dialog
//   const getUsers = async () => {
//     users.push(await page.evaluate(() => Array.from(document.querySelectorAll('a > div > div > span > span'), item => item.innerText)))
//   }

//   //likes dialog scroll
//   console.log(users)
//   await page.exposeFunction("getUsers", getUsers);
//   try {
//     console.log("Please wait...");
//     await new Promise((resolve) => setTimeout(resolve, 2000))
//     const res = await page.$eval(".r-1dqxon3", (item) => {
//       let distance = 1200;
//       let totalHeight = 0;
//       let timer = setInterval(() => {
//         getUsers()
//         item.scrollTop = item.scrollTop + distance;
//         totalHeight += distance;
//         if (totalHeight >= item.scrollHeight) {
//           clearInterval(timer);
//         }
//         return item;
//       }, 2000);
//     });
//   } catch (e) {
//     console.log(e);
//   }
//   setTimeout(() => {
//     const finalUsers = (param) => Array.from(new Set(param))
//     console.log(finalUsers(users.flat()))
//     const usersLength = finalUsers(users.flat()).length
//     console.log(usersLength)
//   }, 10000);
//   //goto div bottom likes dialog scroll
//     // const res = await page.$eval(".r-1dqxon3", (item) => {
//     //   item.scrollTop = item.scrollHeight
//     //   return item;
//     // }, 2000);



//   //-----------------------------------------get emails
//   // const sel2 = 'a > div > div > span > span'
//   // await page.waitForSelector(sel2);
//   // const email = await page.evaluate(() => Array.from(document.querySelectorAll('a'), item => item.href))
//   // const usersEmailUnquie = (param) => Array.from(new Set(param))
//   // const usersEmail = usersEmailUnquie(email)
//   // const all = []
//   // usersName.forEach((key, value) => {
//   //   all.push({name: key, email: usersEmail[value]})
//   // });
//   // await page.waitForNavigation();

//   // fs.writeFileSync("./box.json", JSON.stringify(items), null, 2);
// })();