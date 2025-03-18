import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './app.css';

const Libros = () => {
  const [libros, setLibros] = useState([]);
  const [editando, setEditando] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    precio: '',
    anio_publicacion: '',
    editorial_id: '',
    autor: '', // Autor actual
  });

  useEffect(() => {
    // Obtener la lista de libros con su autor asociado
    axios.get('http://localhost:5000/api/librosver')
      .then(response => {
        setLibros(response.data);
      })
      .catch(error => {
        console.error('Error al obtener los libros:', error);
      });
  }, []);

  const eliminarLibro = async (libroId) => {
    try {
      await axios.delete(`http://localhost:5000/api/libros/${libroId}`);
      setLibros(libros.filter(libro => libro.libro_id !== libroId));
    } catch (error) {
      console.error('Error al eliminar el libro:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const iniciarEdicion = (libro) => {
    setEditando(libro.libro_id);
    setFormData({
      titulo: libro.titulo,
      precio: libro.precio,
      anio_publicacion: libro.anio_publicacion,
      editorial_id: libro.editorial_id || '',
      autor: libro.autor || '', // Asignar el autor actual
    });
  };

  const modificarLibro = async () => {
    try {
      // Asegúrate de enviar el campo autor_nombre correctamente
      const response = await axios.put(`http://localhost:5000/api/libros/${editando}`, {
        titulo: formData.titulo,
        precio: formData.precio,
        anio_publicacion: formData.anio_publicacion,
        editorial_id: formData.editorial_id,
        autor_nombre: formData.autor // Se asegura que 'autor_nombre' sea el campo que espera el backend
      });

      // Actualizamos el estado de la lista de libros
      setLibros(libros.map(libro => 
        libro.libro_id === editando ? { ...libro, ...formData } : libro
      ));

      // Limpiamos el formulario de edición
      setEditando(null);
      setFormData({ titulo: '', precio: '', anio_publicacion: '', editorial_id: '', autor: '' });
    } catch (error) {
      console.error('Error al modificar el libro:', error);
    }
  };

  return (
    <div>
      <h1>Libros</h1>
      <div>
        <Link to="/crear-libro" className="boton-crear">Crear Nuevo Libro</Link>
      </div>
      <div>
        <h2>Lista de Libros</h2>
        <ul>
          {libros.map((libro) => (
            <li key={libro.libro_id}>
              <div>
                <p><strong>Título:</strong> {libro.titulo}</p>
                <p><strong>Año de Publicación:</strong> {libro.anio_publicacion}</p>
                <p><strong>Precio:</strong> {libro.precio} €</p>
                <p><strong>Editorial:</strong> {libro.editorial || 'Sin Editorial'}</p>
                <p><strong>Autor:</strong> {libro.autor}</p>
              </div>
              <div className="botones">
                <button onClick={() => iniciarEdicion(libro)}>Modificar</button>
                <button onClick={() => eliminarLibro(libro.libro_id)}>Eliminar</button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {editando && (
        <div>
          <h3>Editar Libro</h3>
          <form onSubmit={(e) => { e.preventDefault(); modificarLibro(); }}>
            <div>
              <label>Título:</label>
              <input type="text" name="titulo" value={formData.titulo} onChange={handleInputChange} />
            </div>
            <div>
              <label>Precio:</label>
              <input type="number" name="precio" value={formData.precio} onChange={handleInputChange} />
            </div>
            <div>
              <label>Año de Publicación:</label>
              <input type="number" name="anio_publicacion" value={formData.anio_publicacion} onChange={handleInputChange} />
            </div>
            <div>
              <label>Editorial:</label>
              <input type="text" name="editorial_id" value={formData.editorial_id} onChange={handleInputChange} />
            </div>
            <div>
              <label>Autor:</label>
              <input type="text" name="autor" value={formData.autor} onChange={handleInputChange} />
            </div>
            <div>
              <button type="submit">Guardar cambios</button>
              <button type="button" onClick={() => setEditando(null)}>Cancelar</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default Libros;
