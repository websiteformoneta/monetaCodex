import puppeteer from './node_modules/puppeteer/lib/esm/puppeteer/puppeteer.js';

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/Karso/.cache/puppeteer/chrome/win64-136.0.7103.94/chrome-win64/chrome.exe',
  args: ['--no-sandbox']
});
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://127.0.0.1:5500/', { waitUntil: 'networkidle0' });
const el = await page.$('.section-solution');
if (el) {
  await el.screenshot({ path: 'temporary screenshots/solution-crop.png' });
  console.log('Saved solution-crop.png');
} else {
  console.log('Element not found');
}
await browser.close();
