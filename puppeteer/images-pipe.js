import puppeteer from "puppeteer"
import fs from 'fs'
import http from 'http'
import https from 'https'
import { URL } from 'url'

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto("https://dev.to/search?q=nodejs")

  await page.waitForSelector('.crayons-avatar__image')
  const imgUrls = await page.$$eval('.crayons-avatar__image', item => item.map(item => item.src))//all images

  //downloader writes files by one by so we need foreach loop
  imgUrls.forEach(item => {
    if(item !== null){
      pipeStream(item, () => {
        console.log('Download complete!')
      })
    }
  })
  await browser.close()
})()

function pipeStream(url, state) {
  const userUrl = new URL(url)
  const urlType = userUrl.protocol === 'http:' ? http : https

  const filename = 'media/' + url.split('/').pop()
  const req = urlType.get(url, function (res) {
    const fileStream = fs.createWriteStream(filename)

    res.pipe(fileStream)

    fileStream.on('error', function(error){
      console.log(error)
    })

    fileStream.on('close', function(error){
      state(filename)
    })

    fileStream.on('finished', function(error){
      fileStream.close()
    })
    
  })
  req.on('error',function(error) {
    console.log(error)
  })
}