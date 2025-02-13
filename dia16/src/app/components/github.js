'use client'
import React, { useState } from 'react';

function Github() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchUserData = async () => {
    if (!username) return; 

    setLoading(true); 
    setError(''); 
    setUserData(null); 

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      
      console.log('Respuesta de la API:', response);

      if (!response.ok) {
        throw new Error('Usuario no encontrado');
      }

      const data = await response.json();
      
      console.log('Datos del usuario:', data);
      
      setUserData(data); 
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="App">
      <h1>GitHub User Info</h1>

      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)} 
        placeholder="Ingrese el nombre de usuario de GitHub"
      />

      <button onClick={fetchUserData}>Buscar</button>


      {loading && <p>Cargando...</p>}


      {error && <p style={{ color: 'red' }}>{error}</p>}


      {userData && !loading && !error && (
        <div>
          <img src={userData.avatar_url} alt={userData.name} width="150" />
          <h2>{userData.name}</h2>
          <p>Repositorios Públicos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
}

export default Github;
