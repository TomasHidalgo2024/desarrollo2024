import { readFileSync } from 'node:fs'

console.log('Start reading a file...')
const data = readFileSync('./data.txt', { encoding: 'utf8' })
console.log(data)
console.log('End of the file!')
