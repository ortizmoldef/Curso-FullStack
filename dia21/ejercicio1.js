const fs = require('fs');

const writeStream = fs.createWriteStream('./archivo2.txt');

const mensaje = "¡Este es un de textosdsdsds!";

writeStream.write(mensaje,() => {
  console.log('Mensaje escrito en el archivo.');
});


writeStream.end();
