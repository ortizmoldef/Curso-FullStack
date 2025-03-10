const fs = require('fs');

console.log('Mensaje escrito en el archivo.');

const readStream = fs.createReadStream('./archivo.txt');

readStream.on('data', chunk => {
  console.log('Contenido del archivo:');
  console.log(chunk.toString());
});

readStream.on('end', () => console.log('Lectura Finaliza'))
readStream.on('error', err => console.log(`Error: ${err}`))
