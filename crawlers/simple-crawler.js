const {checkIfAllowed, DEFAULT_USER_AGENT} = require("../utils/crawler-utils");
const {populateBlogData} = require("../utils/data-utils");

async function simpleCrawling(urls, browser) {
    const blogs = [];
    for (let url of urls) {
        if (await checkIfAllowed(url)) {
            const blogPage = await browser.newPage();
            await blogPage.setUserAgent(DEFAULT_USER_AGENT);
            await blogPage.goto(url);
            await populateBlogData(blogPage, blogs, url);
            console.log('' + blogs.length + ".:" + url + ' has been successfully scraped.');
        }
    }
}

module.exports = {
    simpleCrawling
}