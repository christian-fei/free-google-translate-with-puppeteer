const { serial: test } = require('ava')
const { browser: { createBrowser } } = require('mega-scraper')
const translate = require('.')

let browser
test.before(async () => {
  browser = await createBrowser({ headless: true })
})
test.after(async () => {
  await browser.instance.close()
})

test('translates text from italian to english (for free)', async t => {
  const translation = await translate({ text: 'ciao, come stai?', from: 'it', to: 'en', browser })
  t.is(translation, 'Hello how are you?')
})
