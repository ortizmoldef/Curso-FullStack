import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getProducto, updateProducto } from '../Api';

const EditarProductoForm = () => {
  const { id } = useParams();  
  const [producto, setProducto] = useState(null);
  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [stock, setStock] = useState('');
  const [categoria, setCategoria] = useState('');
  const [fechaCreacion, setFechaCreacion] = useState(''); 

  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const data = await getProducto(id); 
        setProducto(data);
        setNombre(data.nombre);
        setDescripcion(data.descripcion);
        setPrecio(data.precio);
        setStock(data.stock);
        setCategoria(data.categoria);
        setFechaCreacion(new Date(data.fechaCreacion).toLocaleDateString());  
      } catch (error) {
        console.error('Error al obtener el producto:', error);
      }
    };

    fetchProducto();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const updatedProducto = { nombre, descripcion, precio, stock, categoria };

    console.log('ID del producto:', id);
  
    try {
      await updateProducto(id, updatedProducto); 
      navigate('/'); 
    } catch (err) {
      console.error('Error al actualizar el producto:', err);
    }
  };
  

  if (!producto) return <div>Cargando...</div>;  

  return (
    <div>
      <h2>Editar Producto</h2>
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
        <div>
          <label>Fecha de Creación:</label>
          <input
            type="text"
            value={fechaCreacion}
            readOnly 
          />
        </div>

        <button type="submit">Actualizar Producto</button>
      </form>
    </div>
  );
};

export default EditarProductoForm;
