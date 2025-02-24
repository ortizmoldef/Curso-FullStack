const fs = require('fs');

fs.unlink('./archivo.txt', (err) => {
  if (err) {
    console.log(`Error al eliminar el archivo: ${err}`);
  } else {
    console.log('Archivo eliminado correctamente');
  }
});
