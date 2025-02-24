const fs = require('fs');
const readStream = fs.createReadStream('./archivo.txt')

readStream.on('data', chunk => console.log(chunk.toString()))
readStream.on('end', () => console.log('Lectura Finaliza'))
readStream.on('error', err => console.log(`Error: ${err}`))