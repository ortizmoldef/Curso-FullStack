const Post = require("../models/Post");


exports.crearPublicacion = async (req, res) => {
    try {
        const { titulo, contenido } = req.body;
        
        if (!titulo || !contenido) {
            return res.status(400).json({ error: "El título y el contenido son obligatorios" });
        }

        const post = await Post.create({ titulo, contenido, usuario: req.user.id });
        res.status(201).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al crear la publicación" });
    }
};

// Editar publicación
exports.editarPublicacion = async (req, res) => {
    try {
        const { id } = req.params; // El ID de la publicación que se desea editar
        const { titulo, contenido } = req.body; // Los datos a editar

        // Verificar si los campos son válidos
        if (!titulo || !contenido) {
            return res.status(400).json({ error: "El título y el contenido son obligatorios" });
        }

        // Buscar la publicación en la base de datos
        const post = await Post.findById(id);

        // Verificar si la publicación existe
        if (!post) {
            return res.status(404).json({ error: "Publicación no encontrada" });
        }

        // Verificar que el usuario sea el dueño de la publicación
        if (post.usuario.toString() !== req.user.id) {
            return res.status(403).json({ error: "No tienes permiso para editar esta publicación" });
        }

        // Actualizar la publicación
        post.titulo = titulo;
        post.contenido = contenido;

        // Guardar los cambios
        await post.save();

        res.status(200).json(post);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al editar la publicación" });
    }
};


  exports.eliminarPublicacion = async (req, res) => {
      try {
          const postId = req.params.id;
  
          // Verificar si la publicación existe
          const post = await Post.findById(postId);
          if (!post) {
              return res.status(404).json({ message: "Publicación no encontrada" });
          }
  
          // Verificar que el usuario sea el autor de la publicación
          if (post.usuario.toString() !== req.user.id) {
              return res.status(403).json({ message: "No tienes permiso para eliminar esta publicación" });
          }
  
          // Eliminar la publicación
          await Post.findByIdAndDelete(postId);
  
          res.json({ message: "Publicación eliminada con éxito" });
      } catch (error) {
          console.error(error);
          res.status(500).json({ error: "Error al eliminar la publicación" });
      }
  };
  
  exports.obtenerMisPublicaciones = async (req, res) => {
    try {
        // Obtener las publicaciones del usuario autenticado
        const publicaciones = await Post.find({ usuario: req.user.id });

        // Verificar si hay publicaciones
        if (!publicaciones || publicaciones.length === 0) {
            return res.status(404).json({ message: "No tienes publicaciones" });
        }

        // Devolver las publicaciones
        res.status(200).json(publicaciones);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error al obtener las publicaciones" });
    }
};
