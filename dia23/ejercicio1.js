//Ejercicio de Imprimir por consola la fecha y la URL de cada solicitud Recibida
const express = require('express');
const app = express();


app.use((req, res, next) => {
  const fecha = new Date();
  const fechaLocal = fecha.toLocaleString();
  console.log(`[${fechaLocal}] Solicitud recibida en: ${req.originalUrl}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Hola Mundo');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
