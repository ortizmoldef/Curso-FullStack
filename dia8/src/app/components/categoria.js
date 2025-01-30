'use client';
import { useState } from 'react';

const Categoria = () =>{
    const productos = [
        { id: 1, nombre: "Laptop", categoria: "Electrónica" },
        { id: 2, nombre: "Camiseta", categoria: "Ropa" },
        { id: 3, nombre: "Celular", categoria: "Electrónica" },
        { id: 4, nombre: "Zapatos", categoria: "Ropa" },
        { id: 5, nombre: "Audífonos", categoria: "Electrónica" }
      ];
      
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('Electrónica');

    const [productosFiltrados, setProductosFiltrados] = useState(productos);


    const handleCategoriaChange = (categoria) => {
    setCategoriaSeleccionada(categoria);
    if (categoria === 'Todos') {
        setProductosFiltrados(productos); 
    } else {
        setProductosFiltrados(productos.filter(producto => producto.categoria === categoria));
    }
    };

        return (
            <div>
              <h1>Productos</h1>
        
              {/* Selector de categoría */}
              <label htmlFor="categoria">Selecciona una categoría:</label>
              <select
                id="categoria"
                value={categoriaSeleccionada}
                onChange={(e) => handleCategoriaChange(e.target.value)}
              >
                <option value="Electrónica">Electrónica</option>
                <option value="Ropa">Ropa</option>
                <option value="Todos">Todos</option>
              </select>
        
              {/* Mostrar productos filtrados */}
              <ul>
                {productosFiltrados.map((producto) => (
                  <li key={producto.id}>
                    {producto.nombre} - {producto.categoria}
                  </li>
                ))}
              </ul>
            </div>
          );
}

export default Categoria;