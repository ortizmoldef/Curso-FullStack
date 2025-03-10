const express = require('express');
const { PrismaClient } = require('@prisma/client');
const UsuarioRoutes = require('./routes/usuariosPrisma');
const app = express();
const PORT = 3000;

const prisma = new PrismaClient(); 

app.use(express.json());
app.use('/usuarios', UsuarioRoutes);

prisma.$connect()
  .then(() => console.log('Conectado a la base de datos MongoDB con Prisma'))
  .catch(err => console.log('Error al conectar con la BD usando Prisma', err));

app.get('/', (req, res) => {
  res.send('API funcionando');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

module.exports = prisma; 
