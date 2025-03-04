const express = require('express')
const { PrismaClient } = require('@prisma/client'); 
const router = express.Router();
const prisma = new PrismaClient();

router.post('/', async (req, res) => {
    try {
      const { username, email, edad } = req.body;
      if (!username || !email || !edad) {
        return res.status(400).json({
          error: 'Faltan datos requeridos',
        });
      }
      const usuario = await prisma.usuario.create({
        data: {
          username,
          email,
          edad,
        },
      });
  
      res.status(201).json(usuario);
    } catch (error) {
      console.error(error);
      res.status(400).json({
        error: 'Un problema al crear el usuario',
        details: error.message,
      });
    }
  });

router.get('/', async (req, res) => {
    try {
      const usuarios = await prisma.usuario.findMany();
      if (usuarios.length === 0) {
        return res.status(404).json({
          error: 'No se encontraron usuarios',
        });
      }
      res.json(usuarios); 
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: 'Hubo un error al recuperar los usuarios',
        details: error.message,
      });
    }
  });
  

module.exports = router