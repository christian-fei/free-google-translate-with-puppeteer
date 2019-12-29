#!/usr/bin/env node
const { browser: { createBrowser } } = require('mega-scraper')

module.exports = translate

async function translate ({ text, from = 'auto', to, browser } = {}) {
  if (!text) throw new Error('missing text')
  if (!from) throw new Error('missing from')
  if (!to) throw new Error('missing to')
  if (!browser) browser = await createBrowser({ headless: true })

  const page = await browser.newPage(`https://translate.google.com/#view=home&op=translate&sl=${from}&tl=${to}&text=${encodeURIComponent(text)}`)
  await page.waitForSelector('.tlid-translation')

  const translation = await page.evaluate(() => document.querySelector('.tlid-translation').textContent)
  await page.close()

  return translation
}
