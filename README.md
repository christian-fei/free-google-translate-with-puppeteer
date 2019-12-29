# free-google-translate-with-puppeteer

spins up a puppeteer instance (with [mega-scraper](https://www.npmjs.com/package/mega-scraper)) and translates any text for free using google translate, headlessly, with a free random proxy (using [get-free-https-proxy](https://www.npmjs.com/package/get-free-https-proxy))

## example usage

```js
const translate = require('free-google-translate-with-puppeteer')

translate({ text: 'ein apfel am tag hält den arzt fern', from: 'it', to: 'en' })
  .then(translation => {
    console.log(`-> "${translation}"`) // one apple a day keeps the doctor away
  })
```
