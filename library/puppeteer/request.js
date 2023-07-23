import puppeteer from "puppeteer";

//run and down the scroll and watch terminal
(async() => {
  const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage()

  await page.goto('https://www.google.com/search?sxsrf=AB5stBgRtOq8AwILNjzQ1fkvjDRhKL031w:1688576915005&q=images&tbm=isch&sa=X&ved=2ahUKEwizhMeZh_j_AhViVfEDHXZkB5IQ0pQJegQIDBAB&biw=1366&bih=636&dpr=1')

  const elements = await page.$x('//*[@id="yDmH0d"]/c-wiz/div/div/div/div[2]/div[1]/div[3]/div[1]/div[1]/form[1]/div/div/button/span')
  await elements[0].click()

  page.on('request', (request) => {
    let url = request.url()
    if(url.includes('https://encrypted-tbn0.gstatic.com/images')){
      console.log(url)
    }
  })
 
  // await browser.close()
})()