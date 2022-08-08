const puppeteer = require("puppeteer");
const { checkIfAllowed} = require("../utils/crawler-utils");
const {populateBlogData} = require("../utils/data-utils");

async function parallelCrawling(urls, totalPagesCount) {
    const blogs = [];
    const browserPromises = [];
    let totalPagesPerBrowserCount = totalPagesCount;
    let totalBrowserInstancesCount = 4;
    while (--totalBrowserInstancesCount >= 0) {
        browserPromises.push(
            new Promise(async (browserResponse) => {
                const browser = await puppeteer.launch({
                    waitUntil: "domcontentloaded"
                });
                const pagePromises = [];
                totalPagesPerBrowserCount = totalPagesCount;
                while (--totalPagesPerBrowserCount >= 0) {
                    pagePromises.push(
                        new Promise(async (pageResponse) => {
                            do {
                                const url = urls.pop();
                                if (await checkIfAllowed(url)) {
                                    let page = await browser.newPage();
                                    await page.goto(url);
                                    await populateBlogData(page, blogs, url);
                                    await page.close();
                                    console.log('' + blogs.length + ".:" + url + ' has been successfully scraped.');
                                }
                            } while (urls.length > 0);
                            pageResponse();
                        })
                    );
                }
                await Promise.all(pagePromises);
                await browser.close();
                browserResponse();
            })
        );
    }
    await Promise.all(browserPromises);
}

module.exports = {
    parallelCrawling
}
