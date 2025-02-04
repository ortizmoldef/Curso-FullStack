'use client'
import { useState, useEffect } from 'react';

const ObtenerDatosApi = () =>{
    const [datos, setDatos] = useState(null);
    const [loading, setLoading] = useState(true);
    
        useEffect(() => {
            const obtenerDatos = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
                const data = await response.json();
                setDatos(data);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
            } finally {
                setLoading(false);
            }
            };
            obtenerDatos();
  }, []);

  return (
    <div >
      {loading ? (
        <p>Cargando datos...</p>
      ) : (
        <div>
          <h1>Ejercicio Datos Api : </h1>
          <p><strong>Título:</strong> {datos?.title}</p>
          <p><strong>Cuerpo:</strong> {datos?.body}</p>
        </div>
      )}
    </div>
  );};

export default ObtenerDatosApi;