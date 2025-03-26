const Comment = require("../models/comments");
const Post = require("../models/Post"); // Asegúrate de que esto sea correcto
const User = require("../models/user"); // Asegúrate de que esto sea correcto

exports.crearComentario = async (req, res) => {
    try {
        const { contenido, post } = req.body;

        // Verificar si todos los campos son proporcionados
        if (!contenido || !post) {
            return res.status(400).json({ error: "El contenido y el ID de la publicación son obligatorios" });
        }

        // Verificar si el post existe
        const postExistente = await Post.findById(post);
        if (!postExistente) {
            return res.status(404).json({ error: "La publicación a la que intentas comentar no existe" });
        }

        // Verificar si el usuario existe
        const usuarioExistente = await User.findById(req.user.id); // Suponiendo que estás usando req.user.id para obtener el usuario
        if (!usuarioExistente) {
            return res.status(404).json({ error: "El usuario no existe" });
        }

        // Crear el comentario
        const comentario = new Comment({
            contenido,
            post,
            usuario: req.user.id,  // Usar el ID del usuario desde el token (autenticado)
        });

        await comentario.save();
        res.status(201).json(comentario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear el comentario" });
    }
};


// En controllers/comments.js

exports.editarComentario = async (req, res) => {
    try {
        const comentarioId = req.params.id;
        const { contenido } = req.body;

        if (!contenido) {
            return res.status(400).json({ error: 'El contenido del comentario es obligatorio' });
        }

        // Aquí verificamos si el comentario existe
        const comentario = await Comment.findById(comentarioId);
        if (!comentario) {
            return res.status(404).json({ error: 'Comentario no encontrado' });
        }

        // Verificar si el usuario tiene permiso para editar el comentario
        if (comentario.usuario.toString() !== req.user.id) {
            return res.status(403).json({ error: 'No tienes permiso para editar este comentario' });
        }

        // Actualizar el comentario
        comentario.contenido = contenido;
        await comentario.save();

        res.status(200).json(comentario);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al editar el comentario' });
    }
};

