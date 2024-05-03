//const fs = require('node:fs')
import fs from 'node:fs'

console.log('Start reading a file...')
fs.readFile('./data.txt', { encoding: 'utf8' }, (err, data) => {
  if (error) {
    console.log(`Error: ${error}`)
  } else {
    console.log(dataInTheFile)
  }
  console.log('End of the file!')
})
