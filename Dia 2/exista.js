const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

// Servir el archivo 'index.html' si no se pasa el parámetro 'file'
app.get('/', (req, res) => {
  res.send('<h1>Bienvenido a la página de inicio</h1><p>Por favor, proporciona un archivo para ver.</p>');
});

// Ruta que recoge 'file' como parámetro GET
app.get('/verArchivo/:file', (req, res) => {
  const fileName = req.params.file; // Obtiene el parámetro 'file' de la URL
  const folderPath = path.join(__dirname, 'http');  // Ruta de la carpeta 'Dia 2'
  const filePath = path.join(folderPath, fileName); // Ruta completa al archivo

  // Verificar si el archivo existe con fs.promises.access
  fs.promises.access(filePath, fs.constants.F_OK)
    .then(() => {
      // Si el archivo existe, lo enviamos como respuesta
      res.sendFile(filePath);
    })
    .catch((err) => {
      // Si el archivo no existe, mostrar una página de error personalizada
      res.status(404).send('<h1>Archivo no encontrado</h1><p>El archivo que buscas no existe en el servidor.</p>');
    });
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
