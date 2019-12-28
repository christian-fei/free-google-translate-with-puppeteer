#!/usr/bin/env node

if (require.main === module) {
  main()
} else {
  module.exports = main
}

async function main () {
  console.log('main')
}
