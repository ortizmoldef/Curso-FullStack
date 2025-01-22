const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Ruta que recoge 'file' como parámetro GET
app.get('/archivos/:file', (req, res) => {
  const fileName = req.params.file; // Obtiene el parámetro 'file' de la URL
  const folderPath = path.join(__dirname, '');  // Tiene que estar vacia, por que como esta en la misma carpeta
  const filePath = path.join(folderPath, fileName); // Ruta completa al archivo

  // Verificar si el archivo existe con fs.promises.access
  fs.promises.access(filePath, fs.constants.F_OK)
    .then(() => {
      // Si el archivo existe, lo enviamos como respuesta
      res.sendFile(filePath);
    })
    .catch((err) => {
      // Si el archivo no existe, enviar un error 404
      res.status(404).send('Archivo no encontrado');
    });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
