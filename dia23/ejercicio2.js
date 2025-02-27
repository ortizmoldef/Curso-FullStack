const express = require('express');
const app = express();


const verificarToken = (req, res,next) => {
    const token = req.headers['authorization']
    if(!token){
        return res.status(403).json({mensaje: 'No autorizado'})
    }
        next()
}

app.use(verificarToken)

app.get('/perfil', (req,res) => {
    res.json({mensaje: 'Usuario Autentificado'})
})

app.listen(3000, () => {
    console.log('Servidor escuchando en el puerto 3000');
  });
  