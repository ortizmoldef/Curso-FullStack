import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createProducto } from '../Api';

const NuevoProductoForm = () => {
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState(new Date());  
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!nombre || !descripcion || !precio || !stock || !categoria) {
      setError('Todos los campos son obligatorios');
      return;
    }

    if (isNaN(precio) || precio <= 0) {
      setError('El precio debe ser un número válido mayor a 0');
      return;
    }

    if (isNaN(stock) || stock < 0) {
      setError('El stock debe ser un número válido mayor o igual a 0');
      return;
    }

    const nuevoProducto = {
      nombre,
      descripcion,
      precio,
      stock,
      categoria,
      fechaCreacion,  
    };

    try {
      await createProducto(nuevoProducto);
      navigate('/');  
    } catch (err) {
      setError('Hubo un error al crear el producto');
    }
  };

  return (
    <div>
      <h2>Agregar Nuevo Producto</h2>
      {error && <div style={{ color: 'red' }}>{error}</div>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
        <input
          type="text"
          placeholder="Descripción"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />
        <input
          type="number"
          placeholder="Precio"
          value={precio}
          onChange={(e) => setPrecio(e.target.value)}
        />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
        />
        <input
          type="text"
          placeholder="Categoría"
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        />
        <input
          type="date"
          value={fechaCreacion.toISOString().split('T')[0]} 
          onChange={(e) => setFechaCreacion(new Date(e.target.value))}
        />
        <button type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default NuevoProductoForm;
