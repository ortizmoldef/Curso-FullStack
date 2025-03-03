const express = require('express')
const Usuario = require('../models/Usuario')

const router = express.Router()

router.post('/', async (req,res) => {
    try{
        const usuario = new Usuario(req.body)
        await usuario.save()
        res.status(201).json(usuario)
    } catch(error) {
       res.status(400).json({
        error: 'Un problema'
       }) 
    }
})

router.get('/', async (req, res) => {
    try {
        const usuarios = await Usuario.find();
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