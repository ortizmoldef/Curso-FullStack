const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.json());

app.get('/alumnos', (req, res) => {
    fs.readFile('./archivo.txt', 'utf8', (err, data) => {
        if (err) {
            return res.status(500).send('No se pudo leer el archivo.');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
    });
});

app.post('/alumnos', (req, res) => {
    const {dato} = req.body

    console.log(req.body);

    fs.writeFile('./archivo.txt', dato,'utf8', (err) => {
        if (err) {
            return res.status(500).send('No se pudo escribir el archivo.');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.send("Datos guardados correctamente");
    });
});

app.listen(3001, () => {
    console.log('Servidor de Express iniciado en el puerto 3001');
});
