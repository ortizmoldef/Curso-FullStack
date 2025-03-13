import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Libros = () => {
  const [libros, setLibros] = useState([]);

  // Función para obtener los libros desde la API
  useEffect(() => {
    axios.get('http://localhost:5000/api/librosver')
      .then(response => {
        setLibros(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los libros:', error);
      });
  }, []);

  // Función para eliminar un libro
  const eliminarLibro = async (libroId) => {
    try {
      await axios.delete(`http://localhost:5000/api/libros/${libroId}`);
      setLibros(libros.filter(libro => libro.libro_id !== libroId));
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
    }
  };

  return (
    <div>
      <h1>Libros</h1>
      <button>
        <Link to="/crear-libro">Crear Nuevo Libro</Link>
      </button>
      
      <h2>Lista de Libros</h2>
      <ul>
        {libros.map((libro) => (
          <li key={libro.libro_id}>
            <strong>Título:</strong> {libro.titulo}<br />
            <strong>Año de Publicación:</strong> {libro.anio_publicacion}<br />
            <strong>Precio:</strong> {libro.precio} €<br />
            <strong>Editorial:</strong> {libro.editorial}<br />
            <strong>Autor:</strong> {libro.autor}<br />
            {/* Botón de eliminar */}
            <button onClick={() => eliminarLibro(libro.libro_id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Libros;
