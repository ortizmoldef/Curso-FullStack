const express = require('express');
const app = express();

// Ruta que recoge 'name' como parámetro GET
app.get('/hola/:name', (req, res) => {
  const name = req.params.name; // Accede al parámetro 'name' de la URL
  res.send(`Hola ${name}!!`); // Muestra el mensaje con el nombre
});

// Inicia el servidor en el puerto 3000
app.listen(3000, () => {
  console.log('Servidor corriendo en el puerto 3000');
});
