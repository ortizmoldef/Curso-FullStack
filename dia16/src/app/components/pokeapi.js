'use client'
import React, { useState } from 'react';

function Pokemon() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  
  const fetchPokemonData = async () => {
    if (!pokemonName) return; 

    setLoading(true); 
    setError(''); 
    setPokemonData(null); 

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      
      console.log('Respuesta de la API:', response);

      if (!response.ok) {
        throw new Error('Pokemon no encontrado');
      }

      const data = await response.json();
      
      console.log('Datos del Pokemon:', data);
      
      setPokemonData(data); 
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError(err.message); 
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div className="Pokemon">
      <h1>Pokemon Info</h1>

      <input
        type="text"
        value={pokemonName}
        onChange={(e) => setPokemonName(e.target.value)} 
        placeholder="Ingrese el nombre del pokemon"
      />

      <button onClick={fetchPokemonData}>Buscar</button>


      {loading && <p>Cargando...</p>}


      {error && <p style={{ color: 'red' }}>{error}</p>}


      {pokemonData && !loading && !error && (
        <div>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} width="150" />
          <h2>{pokemonData.name.toUpperCase()}</h2>
          <p>ID: {pokemonData.id}</p>
          <p>Tipos: {pokemonData.types.map((type) => type.type.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default Pokemon;
