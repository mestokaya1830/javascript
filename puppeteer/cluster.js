import { Cluster } from 'puppeteer-cluster'

(async () => {
  const cluster = await Cluster.launch({
    // headless: false,
    concurrency: Cluster.CONCURRENCY_CONTEXT,
    maxConcurrency: 2,
  });

  await cluster.task(async ({ page, data: url }) => {
    await page.goto(url)
    await page.screenshot({ 
      path: './images/' + url.replace(/[^a-zA-Z]/g, '')  +'.png'
    });
  })

  cluster.queue('http://www.google.com/')
  cluster.queue('http://www.wikipedia.org/')
  // many more pages

  await cluster.idle()
  await cluster.close()
})()