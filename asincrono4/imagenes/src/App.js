import React, { useState, useEffect } from "react";
import axios from "axios";
import './App.css';

const UNSPLASH_API_URL = "https://api.unsplash.com/search/photos";  // Endpoint de búsqueda de fotos
const ACCESS_KEY = "ZDXvXiWcFoGr0a1FS2FNhpyspBMbDnpW7GjG9Eg3RVk";  // Tu clave de API

function App() {
  const [images, setImages] = useState([]);
  const [searchTerm, setSearchTerm] = useState("nature");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await axios.get(UNSPLASH_API_URL, {
          params: {
            client_id: ACCESS_KEY,
            query: searchTerm,
            per_page: 10,  // Número de imágenes a mostrar por búsqueda
          },
        });
        setImages(response.data.results);  // La respuesta es 'results' cuando haces una búsqueda
      } catch (err) {
        setError("Error al obtener las imágenes.");
      }
      setLoading(false);
    };

    fetchImages();
  }, [searchTerm]);

  // Maneja la entrada de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(e.target.search.value); // Cambia el término de búsqueda
  };

  return (
    <div className="App">
      <h1>Galería de Imágenes de Unsplash</h1>

      {/* Formulario de búsqueda */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          name="search"
          placeholder="Buscar imágenes"
          defaultValue={searchTerm}
        />
        <button type="submit">Buscar</button>
      </form>

      {/* Mostrar mensaje de carga */}
      {loading && <p>Cargando...</p>}

      {/* Mostrar error */}
      {error && <p>{error}</p>}

      {/* Mostrar imágenes */}
      <div className="image-grid">
        {images.length > 0 ? (
          images.map((image) => (
            <div key={image.id} className="image-item">
              <img src={image.urls.small} alt={image.alt_description} />
            </div>
          ))
        ) : (
          <p>No se encontraron imágenes.</p>
        )}
      </div>
    </div>
  );
}

export default App;
