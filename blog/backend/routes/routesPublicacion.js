const express = require('express');
const router = express.Router();
const publicaciónController = require('../controllers/publicacion');
const authMiddleware = require('../middleware/authMiddleware');

// Crear post
router.post('/crear_post',authMiddleware, publicaciónController.crearPublicacion)

// Editar Post
router.put('/post/:id', authMiddleware, publicaciónController.editarPublicacion);

// Eliminar Post
router.delete('/post/:id', authMiddleware, publicaciónController.eliminarPublicacion);

router.get('/post',authMiddleware, publicaciónController.obtenerMisPublicaciones)

module.exports = router;