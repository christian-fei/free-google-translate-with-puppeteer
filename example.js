#!/usr/bin/env node
const pLimit = require('p-limit')
const limit = pLimit(3)
const translate = require('.')

main()

async function main () {
  const toTranslate = [{
    text: 'ciao, come stai?', from: 'it', to: 'en'
  }, {
    text: 'hey', from: 'en', to: 'es'
  }, {
    text: 'You must give appropriate credit, provide a link to the license, and indicate if changes were made. You may do so in any reasonable manner, but not in any way that suggests the licensor endorses you or your use', from: 'en', to: 'es'
  }, {
    text: 'Permission is granted to copy, distribute and/or modify this document under the terms of the GNU Free Documentation License, Version 1.2 or any later version published by the Free Software Foundation', from: 'en', to: 'de'
  }, {
    text: 'If the repair center was able to receive the repair order, it will remain there until repair services resume', from: 'en', to: 'fr'
  }, {
    text: 'one apple a day keeps the doctor away', from: 'en', to: 'de'
  }, {
    text: 'This file contains additional information, probably added from the digital camera or scanner used to create or digitize it.', from: 'en', to: 'it'
  }, {
    text: 'one apple a day keeps the doctor away', to: 'de'
  }, {
    text: 'You can tap on the cards to expand them and see additional information. Expanding the weather widget, for instance, will display a five-day forecast, with additional prompts to save you the trouble of asking Assistant a question with your voice. Expanding a calendar reminder, meanwhile, allows you to see the description of an upcoming event and a list of attendees.', to: 'it'
  }, {
    text: 'But you can still find some decent trade in values across the web. It wouldn’t do much good for us to share and compare all of the exact dollar amounts in this post', to: 'fr'
  }, {
    text: 'Spider-Man garnered awards and nominations in a variety of categories with particular praise for its story, characters, performances, and music', to: 'de'
  }, {
    text: 'Spider-Man appeared on several lists of the top video games of 2018, being ranked in first place by Wired;[19] second place by Apple Daily and Time.', to: 'pl'
  }, {
    text: 'Ubinas is a steep cone with a prominent notch on the southern side. The most active volcano in Peru, it has a history of small- to moderate-sized explosive eruptions and persistent degassing and ash emissions', to: 'it'
  }]
  // for (const params of toTranslate) {
  //   console.log(`Translating "${params.text}" from "${params.from || 'auto'}" to "${params.to}"`)
  //   const translation = await translate(params)
  //   console.log(`-> "${translation}"`)
  // }

  await Promise.all(toTranslate.map(params => limit(async () => {
    console.log(`Translating "${params.text}" from "${params.from || 'auto'}" to "${params.to}"`)
    const translation = await translate(params)
    console.log(`-> "${translation}"`)
  })))

  process.exit(0)
}
