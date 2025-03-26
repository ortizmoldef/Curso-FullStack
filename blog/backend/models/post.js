const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    contenido: { type: String, required: true },
    usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'usuarios', required: true },
}, { timestamps: true });

// Evitar redefinir el modelo si ya existe
const Post = mongoose.models.Post || mongoose.model('Post', postSchema);

module.exports = Post;
