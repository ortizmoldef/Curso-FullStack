const express = require('express');
const app = express();
const browserSync = require('browser-sync').create();

// Configura Express
app.use(express.static('public')); // Asumiendo que los archivos estáticos están en la carpeta 'public'

// Agrega una ruta simple
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Inicia el servidor de Express
const server = app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});

// Configura BrowserSync para actualizar el navegador
browserSync.init({
  proxy: 'http://localhost:3000',  // Apunta al servidor Express
  files: ['public/**/*', 'views/**/*'],  // Archivos que se deben observar para cambios
  port: 5000,  // Puerto en el que se abrirá la vista en el navegador
});

