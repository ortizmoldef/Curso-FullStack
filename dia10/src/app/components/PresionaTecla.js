"use client"
import React, { useState, useEffect } from 'react';

const PresionaTecla = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        setMessage('¡Has presionado Enter!');
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div>
      <h1>Detectar tecla presionada : </h1>
      <p>Presiona la tecla "Enter" para ver el mensaje.</p>
      <p>{message}</p>
    </div>
  );
};

export default PresionaTecla;
