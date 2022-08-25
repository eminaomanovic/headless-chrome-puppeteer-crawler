# Building a dynamic crawler with Puppeteer and Headless Chrome


<img src="https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png" height="140" align="right"/>
<br/>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Google_Chrome_icon_%28September_2014%29.svg/1024px-Google_Chrome_icon_%28September_2014%29.svg.png?20200318094909" height="110" align="right" style="bottom: 0px;"/>


[Building a dynamic crawler with Puppeteer and Headless Chrome](https://www.atlantbh.com/building-a-dynamic-crawler-with-puppeteer-and-headless-chrome/) explains how crawling of dynamic pages can be done along with scraping data from crawled websites. The file **app.js** crawls blog links from https://www.atlantbh.com/blog/ page and then scrapes each of them on three different ways, showing different execution times. 
Libraries used in this repository are:
 
> [**puppeteer**](https://github.com/puppeteer/puppeteer) is a Node library which provides a high-level API to control Chrome or Chromium over the DevTools Protocol.
 
> [**robots-txt-parser**](https://github.com/chrisakroyd/robots-txt-parser) is a lightweight robots.txt parser for Node.js with support for wildcards, caching and promises.


Commands for starting crawlers:
```
- npm install
- node app.js
```
All code used in a blog can be found in this repository.
