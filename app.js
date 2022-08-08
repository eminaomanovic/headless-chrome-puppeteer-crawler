const {parallelCrawling} = require("./crawlers/parallel-crawler");
const {simpleCrawling} = require("./crawlers/simple-crawler");
const {DEFAULT_USER_AGENT, DEFAULT_HOST} = require("./utils/crawler-utils");
const {fetchUrls} = require("./utils/data-utils");
const puppeteer = require("puppeteer");

(async function executeCrawlers() {
   const browser = await puppeteer.launch({waitUntil: "domcontentloaded"});
   const page = await browser.newPage();
   await page.setUserAgent(DEFAULT_USER_AGENT);
   await page.goto(DEFAULT_HOST + "/blog/");
   const urls = await fetchUrls(page);
   const startDate1 = new Date().getTime();
   await simpleCrawling(urls.slice(), browser);
   console.log(
       `Simple crawler needed ${Math.round(
           (new Date().getTime() - startDate1) / 1000
       )} s to finish.`
   );
   const startDate2 = new Date().getTime();
   await parallelCrawling(urls.slice(), 1);
   console.log(
       `Parallel crawler with 1 page per browser needed ${Math.round(
           (new Date().getTime() - startDate2) / 1000
       )} s to finish.`
   );
   const startDate3 = new Date().getTime();
   await parallelCrawling(urls.slice(), 3);
   console.log(
       `Parallel crawler with 3 pages per browser needed ${Math.round(
           (new Date().getTime() - startDate3) / 1000
       )} s to finish.`
   );
   await browser.close();
})();
