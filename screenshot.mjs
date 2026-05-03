import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const screenshotDir = path.join(__dirname, 'temporary screenshots');

if (!fs.existsSync(screenshotDir)) {
  fs.mkdirSync(screenshotDir, { recursive: true });
}

const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

// Find next available screenshot number
const existing = fs.readdirSync(screenshotDir).filter(f => f.startsWith('screenshot-'));
let n = 1;
if (existing.length > 0) {
  const nums = existing.map(f => parseInt(f.replace('screenshot-', '').replace(/-.*/, '').replace('.png', ''))).filter(Number.isFinite);
  if (nums.length > 0) n = Math.max(...nums) + 1;
}

const filename = label ? `screenshot-${n}-${label}.png` : `screenshot-${n}.png`;
const outputPath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Users/Karso/.cache/puppeteer/chrome/win64-146.0.7680.153/chrome-win64/chrome.exe',
  headless: 'new',
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
const scrollY = process.argv[4] ? parseInt(process.argv[4]) : 0;
await page.goto(url, { waitUntil: 'networkidle0', timeout: 30000 });
if (scrollY) await page.evaluate((y) => window.scrollTo(0, y), scrollY);
await page.screenshot({ path: outputPath, fullPage: !scrollY });
console.log(`Screenshot saved: ${outputPath}`);

await browser.close();
