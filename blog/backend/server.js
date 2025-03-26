require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const publicacionRoutes = require('./routes/routesPublicacion');
const userRoutes = require('./routes/routesUser');
const commentRoutes = require('./routes/routesComments');

app.use(cors());


app.use(express.json());



app.use('/api', publicacionRoutes);

app.use('/api',userRoutes);

app.use('/api',commentRoutes);

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


const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
