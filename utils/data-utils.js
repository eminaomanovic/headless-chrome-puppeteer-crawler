async function populateBlogData(page, blogs, url) {
    blogs.push({
        url,
        ...(await page.evaluate(() => {
            return {
                title: document.querySelector("h1.entry-title").innerText,
                category: Array.from(document.querySelectorAll("div.inner-wrap > a"))
                                        .map((x) => x.innerText)
                                        .join(", "),
                author: document.querySelector("div#single-below-header > span.meta-author > span > a").innerText,
                publishedDate: document.querySelectorAll("div#single-below-header > span.meta-date")[0].innerText,
            };
        })),
    });
}

async function fetchUrls(page) {
    return await page.evaluate(() => {
        return Array.from(document.querySelectorAll("div.post-area > div.posts-container > article"))
            .map(element => element.querySelector("div.content-inner > div.article-content-wrap> div.post-header > h3 > a").href
        );
    });
}
module.exports = {
    fetchUrls,
    populateBlogData
}