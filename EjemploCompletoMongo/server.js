const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Producto = require('./models/producto');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.use(cors({
  origin: 'http://localhost:3001',  
}));


const connectBD = async () => {
  try {
    await mongoose.connect('mongodb://localhost:27017/tienda');
    console.log('Conectado a MongoDB');
  } catch (err) {
    console.error('Error al conectar a MongoDB:', err);
    process.exit(1);  
  }
};

connectBD();

app.get('/productos', async (req, res) => {
  try {
    const productos = await Producto.find();
    res.json(productos);
  } catch (err) {
    res.status(500).json({ message: 'Error al obtener productos', error: err.message });
  }
});

app.post('/productos', async (req, res) => {
  const { nombre, descripcion, precio, stock, categoria } = req.body;
  const producto = new Producto({
    nombre,
    descripcion,
    precio,
    stock,
    categoria,
    fechaCreacion: new Date(),
  });

  try {
    const nuevoProducto = await producto.save();
    res.status(201).json(nuevoProducto);
  } catch (err) {
    res.status(400).json({ message: 'Error al crear el producto', error: err.message });
  }
});

app.get('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findById(req.params.id);
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }
    res.json(producto);
  } catch (err) {
    console.error('Error al obtener el producto:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
});




app.put('/productos/:id', async (req, res) => {
  console.log('ID recibido en la ruta:', req.params.id); 

  try {
    const producto = await Producto.findById(req.params.id);  
    if (!producto) {
      return res.status(404).json({ message: 'Producto no encontrado' });
    }

    producto.nombre = req.body.nombre || producto.nombre;
    producto.descripcion = req.body.descripcion || producto.descripcion;
    producto.precio = req.body.precio || producto.precio;
    producto.stock = req.body.stock || producto.stock;
    producto.categoria = req.body.categoria || producto.categoria;

    const productoActualizado = await producto.save();
    res.json(productoActualizado);
  } catch (err) {
    console.error('Error al actualizar el producto:', err);  
    res.status(400).json({ message: 'Error al actualizar el producto' });
  }
});



app.delete('/productos/:id', async (req, res) => {
  try {
    const producto = await Producto.findByIdAndDelete(req.params.id);
    if (!producto) return res.status(404).json({ message: 'Producto no encontrado' });

    res.json({ message: 'Producto eliminado correctamente' });
  } catch (err) {
    res.status(500).json({ message: 'Error al eliminar el producto', error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
