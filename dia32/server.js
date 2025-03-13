// app.js
const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const librosRoutes = require('./routes/Libros');
const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', librosRoutes(db)); 

//createTables();

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
