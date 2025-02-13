'use client'
import React, { useState } from 'react';

function SimpsonsQuote() {
  const [quote, setQuote] = useState('');
  const [character, setCharacter] = useState('');
  const [image, setImage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchSimpsonsQuote = async () => {
    setLoading(true);
    setError('');
    setQuote('');
    setCharacter('');
    setImage('');

    try {
      const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');

      if (!response.ok) {
        throw new Error('No se pudo obtener una cita');
      }

      const data = await response.json();
      if (data && data.length > 0) {
        setQuote(data[0].quote); 
        setCharacter(data[0].character); 
        setImage(data[0].image); 
      } else {
        throw new Error('Datos no válidos recibidos');
      }
    } catch (err) {
      console.error('Error en la solicitud:', err);
      setError(err.message); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="SimpsonsQuote">
      <h1>Cita de Los Simpson</h1>

      <button onClick={fetchSimpsonsQuote}>Obtener Cita</button>

      {loading && <p>Cargando...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {quote && !loading && !error && (
        <div>
          {image && <img src={image} alt={character} width="150" />}
          <h2>{character}</h2>
          <p>"{quote}"</p>
        </div>
      )}
    </div>
  );
}

export default SimpsonsQuote;
