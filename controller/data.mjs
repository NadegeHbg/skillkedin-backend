import * as fs from 'fs';

// const fs = require('fs')

const data = JSON.parse(fs.readFileSync('./questions.json', 'utf-8'))
console.log(data)

export default data;