# free-google-translate-with-puppeteer

spins up a puppeteer instance (with [mega-scraper](https://www.npmjs.com/package/mega-scraper)) and translates any text for free using google translate, headlessly, with a free random proxy (using [get-free-https-proxy](https://www.npmjs.com/package/get-free-https-proxy))

## cli usage

```
npm i -g free-google-translate-with-puppeteer
free-google-translate-with-puppeteer --text 'hello how are you' --to 'de'
```

## cli options

#### --text [text] (required)

the text to translate


#### --to [language] (default: en)

translate given text to the following language

#### --from [language] (default: auto)

translate given text from given language


### alternatively with npx

```
npx free-google-translate-with-puppeteer --text 'hello how are you' --to 'de'
```

## example usage

```
npm i free-google-translate-with-puppeteer
```

see [example.js](https://github.com/christian-fei/free-google-translate-with-puppeteer/blob/master/example.js)

```js
const translate = require('free-google-translate-with-puppeteer')

translate({ text: 'ein apfel am tag hält den arzt fern', from: 'it', to: 'en' })
  .then(translation => {
    console.log(`-> "${translation}"`) // one apple a day keeps the doctor away
  })
```

