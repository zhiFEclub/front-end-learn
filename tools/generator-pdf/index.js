const puppeteer = require('puppeteer');

// const devices = require('puppeteer/DeviceDescriptors');
// const iPhone = devices['iPhone 6'];

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.emulate(iPhone);// 模拟iphone 6
  await page.goto('http://www.jianshu.com/p/4723049d5586', {waitUntil: 'networkidle'});
  // await page.pdf({path: 'test.pdf', format: 'A4'});
  await page.screenshot({path: 'example.png', fullPage: true});

  browser.close();
})();