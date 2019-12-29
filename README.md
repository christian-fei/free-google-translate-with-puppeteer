# free-google-translate-with-puppeteer

spin up a puppeteer instance (with [mega-scraper](https://github.com/christian-fei/mega-scraper)) and translate any text for free.

## example usage

```js
#!/usr/bin/env node
const megaScraper = require('mega-scraper')
const translate = require('.')

main()
.then(() => process.exit(0))

async function main () {
  const browser = await megaScraper.browser.createBrowser({ headless: true })
  const toTranslate = [{
    text: 'ciao, come stai?', from: 'it', to: 'en', browser
  }, {
    text: 'hey', from: 'en', to: 'es', browser
  }, {
    text: 'one apple a day keeps the doctor away', from: 'en', to: 'de', browser
  }, {
    text: 'one apple a day keeps the doctor away', to: 'de', browser
  }]
  for (const params of toTranslate) {
    console.log(`Translating "${params.text}" from "${params.from || 'auto'}" to "${params.to}"`)
    const translation = await translate(params)
    console.log(`-> "${translation}"`)
  }
}
```
