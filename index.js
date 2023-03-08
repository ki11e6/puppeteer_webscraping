const fs = require('fs');
const puppeteer = require('puppeteer');

async function run() {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.traversymedia.com/');

  //   for screenshot
  //   await page.screenshot({ path: 'ex.png', fullPage: true });

  // for pdf
  //   await page.pdf({ path: 'expdf.pdf', format: 'A4' });

  //   for html of entire Page
  //   const html = await page.content();

  // for title of page
  //   const title = await page.evaluate(() => document.title);

  // for text from page
  //   const text = await page.evaluate(() => document.body.innerText);

  // for links from the page
  //   const links = await page.evaluate(() =>
  //     Array.from(document.querySelectorAll('a'), (e) => e.href)
  //   );

  //for courses list from page
  const courses = await page.evaluate(() =>
    Array.from(document.querySelectorAll('#cscourses .card'), (e) => ({
      title: e.querySelector('.card-body h3').innerText,
      level: e.querySelector('.card-body .level').innerText,
      url: e.querySelector('.card-footer a').href,
    }))
  );

  console.log(courses);

  //save data to JSON file
  fs.writeFile('courses.json', JSON.stringify(courses), (err) => {
    if (err) throw err;
    console.log('File saved');
  });

  await browser.close();
}

run();
