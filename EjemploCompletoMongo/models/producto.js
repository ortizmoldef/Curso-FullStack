const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true,
    trim: true
  },
  descripcion: {
    type: String,
    required: true
  },
 precio:{
    type: Number,
    required: true
 },
 stock:{
    type:Number,
    required: true
 },
 categoria: {
    type:String,
    required: true
 },
 fechaCreacion: {
    type: Date,
    required: true
 }
})
const Producto = mongoose.model('Producto', productoSchema);

module.exports = Producto;
