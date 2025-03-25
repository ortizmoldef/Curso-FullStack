// backend/server.js
require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Conexión a MySQL (si es necesario)
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error('Error conectando a MySQL:', err);
  } else {
    console.log('Conectado a MySQL');
  }
});

// Ruta de ejemplo para obtener datos
app.get('/data', async (req, res) => {
  try {
    db.query('SELECT * FROM my_table', (err, results) => {
      if (err) throw err;
      res.json(results);
    });
  } catch (error) {
    console.error('Error al obtener datos:', error);
    res.status(500).json({ message: 'Error al obtener datos' });
  }
});

// Inicia el servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
