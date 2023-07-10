import puppeteer from "puppeteer";
import fs from 'fs'
import csv from 'csv-writer'
const createCsvWriter = csv.createObjectCsvWriter

const csvWriter = createCsvWriter({
  path: './media/movies.csv',
  header: [
    {id: 'image', title: 'image'},
    {id: 'title', title: 'title'},
    {id: 'date', title: 'date'},
    {id: 'duration', title: 'duration'},
    {id: 'rating', title: 'rating'}
  ]
});

(async () => {
  const browser = await puppeteer.launch({ headless: false })
  const page = await browser.newPage()
  await page.setViewport({ width: 1000, height: 500 })
  await page.goto('https://www.imdb.com/chart/top/?ref_=nv_mv_250')

  await page.waitForSelector('.ipc-metadata-list')
  const movies = await page.$$eval('.ipc-metadata-list > li', item => item.map(item => ({
    image: item.querySelector('.ipc-image').src,
    title: item.querySelector('.ipc-title__text').innerText,
    date: item.querySelector('.sc-14dd939d-6').innerText,
    duration: item.querySelector('.sc-14dd939d-6 + span').innerText,
    rating: item.querySelector('.ipc-rating-star').innerText,
  })))

  csvWriter
  .writeRecords(movies)
  .then(()=> console.log('The CSV file was written successfully'))
  await browser.close()
})()