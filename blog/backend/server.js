require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const mongoURI = process.env.MONGO_URI

const db = ()=> {
    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Conectado a MongoDB');
    })
    .catch((err) => {
      console.error('Error al conectar con MongoDB:', err);
    });
} 

db();

app.get('/', (req, res) => {
  res.send('Bienvenido a la API Express conectada con MongoDB!');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
