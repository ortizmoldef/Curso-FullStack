// Ejercicio de una IP especifica
const express = require('express');
const app = express();

const bloquearIP = (req,res,next) => {
    const ipBloqueada = '192.168.1.100'
    const ipCliente = req.ip;

    if(ipCliente === ipBloqueada){
        return res.status(403).json({ mensaje: 'AQUI NO ENTRA GUSTAVO, SOY MARIO EL MALVADO' });
    }
  next();  
}

app.use(bloquearIP);

app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
  });
  
  app.get('/perfil', (req, res) => {
    res.send('Ruta de perfil');
  });
  
  app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });