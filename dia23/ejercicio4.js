const express = require('express');
const app = express();

const medirTiempo = (req,res,next) =>{
    const inicio = Date.now()

    res.on('finish', () => {
        const fin = Date.now()
        const duracion = fin - inicio
        console.log(`La solicitud a ${req.originalUrl} tomó ${duracion} ms`)
    })

    next()
}

app.use(medirTiempo);


app.get('/', (req, res) => {
    res.send('¡Hola Mundo!');
  });
  
  app.get('/perfil', (req, res) => {
    res.send('Ruta de perfil');
  });
  
  app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });