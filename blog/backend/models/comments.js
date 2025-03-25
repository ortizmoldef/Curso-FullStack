const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  contenido: { type: String, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  usuario: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
});

const Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
