const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const UsuarioRoutes = require('./routes/usuarios');
const app = express();
const PORT = 3000;
const MONGO_URI = 'mongodb://localhost:27017/pi';

app.use(cors({
  origin: 'http://localhost:3001', 
  methods: 'GET,POST',
  credentials: true,
}));

app.use(express.json());
app.use('/usuarios', UsuarioRoutes);

const connectBD = () => {
  mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a MongoDB'))
    .catch(err => console.log('Error al conectar con la BD', err));
}

connectBD();

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = connectBD;
