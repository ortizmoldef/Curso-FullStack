const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = 3001;
const FILE_PATH = path.join(__dirname, 'archivo.txt');


app.use(express.json());


app.get('/alumnos', (req, res) => {
    fs.readFile(FILE_PATH, 'utf8', (err, data) => {
        if (err) {
            console.error("Error al leer el archivo:", err);
            return res.status(500).send('No se pudo leer el archivo.');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.send(data);
    });
});


app.post('/alumnos', (req, res) => {
    const { dato } = req.body;

    if (!dato) {
        return res.status(400).send('El campo "dato" es obligatorio.');
    }

    console.log("Datos recibidos:", req.body);

    fs.writeFile(FILE_PATH, dato, 'utf8', (err) => {
        if (err) {
            console.error("Error al escribir en el archivo:", err);
            return res.status(500).send('No se pudo escribir el archivo.');
        }
        res.setHeader('Content-Type', 'text/plain');
        res.send("Datos guardados correctamente");
    });
});


app.delete('/alumnos', (req, res) => {
    fs.unlink(FILE_PATH, (err) => {
        if (err) {
            console.error("Error al borrar el archivo:", err);
            return res.status(500).send('No se pudo borrar el archivo.');
        }
        res.send("Archivo eliminado correctamente");
    });
});


app.listen(PORT, () => {
    console.log(`Servidor de Express iniciado en http://localhost:${PORT}`);
});
