# free-google-translate-with-puppeteer

spin up a puppeteer instance (with [mega-scraper](https://github.com/christian-fei/mega-scraper)) and translate any text for free.

## example usage

```js
#!/usr/bin/env node
const translate = require('free-google-translate-with-puppeteer')

main()
.then(() => process.exit(0))

async function main () {
  const translation = await translate({ text: 'ein apfel am tag hält den arzt fern', from: 'it', to: 'en' })
  console.log(`-> "${translation}"`) // one apple a day keeps the doctor away
}
```
