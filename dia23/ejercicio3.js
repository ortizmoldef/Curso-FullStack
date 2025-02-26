//Ejercicio de Contador de Solicitudes que se han recibido en el servidor
const express = require('express');
const app = express();

let contadorSolicitudes = 0;

const contarSolicitudes = (req, res, next) => {
  contadorSolicitudes++;
  console.log(`Número de solicitudes recibidas: ${contadorSolicitudes}`);
  next(); 
};

app.use(contarSolicitudes);

app.get('/', (req, res) => {
  res.send('¡Hola Mundo!');
});

app.get('/perfil', (req, res) => {
  res.send('Ruta de perfil');
});

app.listen(3000, () => {
  console.log('Servidor escuchando en el puerto 3000');
});
