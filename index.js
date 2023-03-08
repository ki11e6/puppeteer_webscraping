const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.traversymedia.com/modern-javascript-2-0');

  //   for screenshot
  //   await page.screenshot({ path: 'ex.png', fullPage: true });

  // for pdf
  //   await page.pdf({ path: 'expdf.pdf', format: 'A4' });

  //   for html of entire Page
  //   const html = await page.content();

  // for title of page
  //   const title = await page.evaluate(() => document.title);

  // for text from page
  const text = await page.evaluate(() => document.body.innerText);
  console.log(text);

  await browser.close();
}

run();
