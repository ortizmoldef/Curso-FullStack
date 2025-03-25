// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/data');
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener datos:', error);
        setLoading(false);
      }
    };
    
    fetchData();
  }, []);

  return (
    <div className="App">
      <h1>Datos desde ExpressJS</h1>
      {loading ? <p>Cargando...</p> : <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default App;
