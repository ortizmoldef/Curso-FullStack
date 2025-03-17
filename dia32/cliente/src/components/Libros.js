import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Libros = () => {
  const [libros, setLibros] = useState([]);
  const [editando, setEditando] = useState(null);
  const [formData, setFormData] = useState({
    titulo: '',
    precio: '',
    anio_publicacion: '',
    editorial_id: '', // Puede estar vacío si no tiene editorial
  });
  const [ventasPorLibro, setVentasPorLibro] = useState({}); // Estado para almacenar las ventas por libro

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

  // Función para manejar cambios en los inputs del formulario de edición
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Función para iniciar el proceso de edición de un libro
  const iniciarEdicion = (libro) => {
    setEditando(libro.libro_id);
    setFormData({
      titulo: libro.titulo,
      precio: libro.precio,
      anio_publicacion: libro.anio_publicacion,
      editorial_id: libro.editorial_id || '', // Si no tiene editorial, se establece vacío
    });
  };

  // Función para modificar un libro
  const modificarLibro = async () => {
    const libroModificado = {
      ...formData
    };

    try {
      const response = await axios.put(`http://localhost:5000/api/libros/${editando}`, libroModificado);
      console.log('Libro modificado:', response.data);

      // Actualizamos el estado de libros con los datos modificados
      setLibros(libros.map(libro =>
        libro.libro_id === editando ? { ...libro, ...libroModificado } : libro
      ));
      // Limpiamos el formulario y el estado de edición
      setEditando(null);
      setFormData({
        titulo: '',
        precio: '',
        anio_publicacion: '',
        editorial_id: '',
      });
    } catch (error) {
      console.error('Error al modificar el libro:', error);
    }
  };

  const obtenerVentas = (libroId) => {
    console.log('Obteniendo ventas para el libro con ID:', libroId); // Verifica el valor de libroId

  if (ventasPorLibro[libroId]) return; // No hacer la solicitud si ya se cargaron las ventas

  axios.get(`http://localhost:5000/api/ventas/${libroId}`)
    .then(response => {
      console.log('Ventas para el libro:', response.data);  // Verifica la respuesta aquí
      setVentasPorLibro(prevState => ({
        ...prevState,
        [libroId]: response.data, // Guardamos las ventas de ese libro
      }));
    })
    .catch(error => {
      console.error('Error al obtener las ventas:', error);
    });
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
            <strong>Editorial:</strong> {libro.editorial || 'Sin Editorial'}<br />
            <strong>Autor:</strong> {libro.autor}<br />
            {/* Botón de modificar */}
            <button onClick={() => iniciarEdicion(libro)}>Modificar</button>
            {/* Botón de eliminar */}
            <button onClick={() => eliminarLibro(libro.libro_id)}>Eliminar</button>
            {/* Botón de ver ventas */}
            <button onClick={() => obtenerVentas(libro.libro_id)}>
              {ventasPorLibro[libro.libro_id] ? 'Ocultar Ventas' : 'Ver Ventas'}
            </button>

            {/* Mostrar las ventas si están disponibles */}
            {ventasPorLibro[libro.libro_id] && ventasPorLibro[libro.libro_id].length > 0 && (
              <div>
                <h3>Ventas de {libro.titulo}</h3>
                <ul>
                  {ventasPorLibro[libro.libro_id].map((venta, index) => (
                    <li key={index}>
                      <strong>Librería:</strong> {venta.libreria}<br />
                      <strong>Fecha de Venta:</strong> {venta.fecha_venta}<br />
                      <strong>Cantidad Vendida:</strong> {venta.cantidad_vendida}<br />
                      <strong>Precio Venta:</strong> {venta.precio_venta} €
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>

      {/* Formulario de edición (solo se muestra cuando estamos editando un libro) */}
      {editando && (
        <div>
          <h3>Editar Libro</h3>
          <form onSubmit={(e) => { e.preventDefault(); modificarLibro(); }}>
            <div>
              <label>Título:</label>
              <input
                type="text"
                name="titulo"
                value={formData.titulo}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Precio:</label>
              <input
                type="number"
                name="precio"
                value={formData.precio}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Año de Publicación:</label>
              <input
                type="number"
                name="anio_publicacion"
                value={formData.anio_publicacion}
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Editorial:</label>
              <input
                type="text"
                name="editorial_id"
                value={formData.editorial_id}
                onChange={handleInputChange}
              />
            </div>
            <button type="submit">Guardar cambios</button>
            <button type="button" onClick={() => setEditando(null)}>Cancelar</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Libros;
