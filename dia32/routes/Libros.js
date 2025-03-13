const express = require('express');
const router = express.Router();
const librosController = require('../controllers/controllers');

module.exports = (db) => {
    // Para ver los autores que hay
    router.get('/autores', librosController.getAutores);

    // Para que puedas ver todos los libros
    router.get('/librosver',librosController.getLibrosVer)
    
    // da los libros con la ID del autor
    router.get('/libros/:autorId', librosController.getAutoresId)
    
    // Para que me de las ventas de libro por ID
    router.get('/ventas/:libroId', librosController.getVentasLibroID)

    // Para crear un libro
    router.post('/libros', librosController.postLibros)

    // Modificar los libros
    router.put('/libros/:id', librosController.putUpdateLibro);

    // Eliminar los Libros
    router.delete('/libros/:id', librosController.DeleteLibro)
    
    return router; 
};
