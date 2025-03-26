const express = require('express');
const router = express.Router();
const comentarioController = require('../controllers/comments');
const authMiddleware = require('../middleware/authMiddleware');

// Crear Comentario
router.post('/crear_comentario', authMiddleware, comentarioController.crearComentario)
// Editar publicación
router.put('/comentario/:id', authMiddleware, comentarioController.editarComentario);

module.exports = router;