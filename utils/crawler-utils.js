const robotsParser = require("robots-txt-parser");
const DEFAULT_USER_AGENT =
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7)" +
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36";
const DEFAULT_HOST = "https://www.atlantbh.com";

async function checkIfAllowed(url) {
    const robots = robotsParser({ userAgent: DEFAULT_USER_AGENT });
    await robots.useRobotsFor(DEFAULT_HOST);
    return robots.canCrawl(url);
}

module.exports = {
    checkIfAllowed,
    DEFAULT_HOST,
    DEFAULT_USER_AGENT
}