// src/components/ListaProductos.js
import React, { useEffect, useState } from 'react';
import { getProductos, deleteProducto } from '../Api';
import { Link } from 'react-router-dom';

const ListaProductos = ({ history }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchProductos = async () => {
      const data = await getProductos();
      setProductos(data);
    };
    fetchProductos();
  }, []);

  const handleDelete = async (id) => {
    await deleteProducto(id);
    setProductos(productos.filter(producto => producto._id !== id));
  };

  return (
    <div>
      <h2>Lista de Productos</h2>
      <ul>
        {productos.map(producto => (
          <li key={producto._id}>
            <h3>{producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <p>Stock: {producto.stock}</p>
            <Link to={`/editar/${producto._id}`}>Editar</Link>
            <button onClick={() => handleDelete(producto._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <Link to="/nuevo">Agregar nuevo producto</Link>
    </div>
  );
};

export default ListaProductos;
