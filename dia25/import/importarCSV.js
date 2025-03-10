const fs = require('fs');
const csv = require('csv-parser');
const mongoose = require('mongoose');
const connectDB = require('../server');
const Usuario = require('../models/Usuario');

connectDB();

const filePath = '../output.csv';  
const usuarios = [];

fs.createReadStream(filePath)
    .pipe(csv())
    .on('data', async (row) => {
        const { nombre, email, edad, trabajo } = row;
        const existingUser = await Usuario.findOne({ email: email });
        if (!existingUser) {
            usuarios.push({ nombre, email, edad: Number(edad), trabajo });
        } else {
            console.log(`El usuario con email ${email} ya existe en la base de datos.`);
        }
    })
    .on('end', () => {
        console.log('CSV leído correctamente');
        if (usuarios.length > 0) {
            Usuario.insertMany(usuarios)
                .then(() => {
                    console.log('Datos insertados exitosamente');
                    mongoose.connection.close(); 
                })
                .catch(err => {
                    console.log('Error al insertar los datos:', err);
                    mongoose.connection.close();
                });
        } else {
            console.log('No se insertaron usuarios. Todos los usuarios ya existían.');
            mongoose.connection.close();
        }
    })
    .on('error', (err) => {
        console.error('Error al leer el archivo CSV:', err);
        mongoose.connection.close();
    });
