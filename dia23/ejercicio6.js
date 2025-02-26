//Ejercicio de Capturar Errores
const express = require('express');
const app = express();

app.get('/error', (req, res, next) => {
    const error = new Error('Algo salió mal');
    error.status = 500; 
    next(error);
  });
  

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(err.status || 500).json({
      mensaje: err.message || 'Ha ocurrido un error inesperado',
      detalle: err.stack || 'No hay detalles disponibles'
    });
  });

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });