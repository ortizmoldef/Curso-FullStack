import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProducto } from '../Api'; 

const Producto = () => {
  const [producto, setProducto] = useState(null);
  const { id } = useParams();  

  useEffect(() => {
    const fetchProducto = async () => {
      const data = await getProducto(id);  
      setProducto(data);  
    };
    fetchProducto();
  }, [id]);  

  if (!producto) return <div>Cargando...</div>;  

  return (
    <div>
      <h2>{producto.nombre}</h2>
      <p>{producto.descripcion}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
      <p>Categoría: {producto.categoria}</p>
      <p>Fecha de Creacion: {producto.fechaCreacion}</p>
    </div>
  );
};

export default Producto;
