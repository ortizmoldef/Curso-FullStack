require('dotenv').config({ path: `.env.${process.env.NODE_ENV || "development"}` });

const express = require('express');
const cors = require('cors');  // Importar cors
const app = express();
const db = require('./db'); // Asegúrate de que esta ruta apunte correctamente a tu archivo de db.js
const rutasLibros = require('./routes/Libros'); // Asegúrate de que esta ruta apunte correctamente a tu archivo de rutas

// Middleware para permitir CORS
app.use(cors({
    origin: 'http://localhost:3000',  // Permitir solicitudes solo desde tu frontend
    methods: ['GET', 'POST', 'PUT', 'DELETE'],  // Métodos permitidos
    allowedHeaders: ['Content-Type', 'Authorization'],  // Encabezados permitidos
}));

// Middleware para parsear JSON
app.use(express.json());

// Usar las rutas pasando `db`
app.use('/api', rutasLibros(db));

// Configuración del puerto
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en puerto ${PORT}`);
});
