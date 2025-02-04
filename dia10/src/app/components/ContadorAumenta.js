"use client"
import React, { useState, useEffect } from 'react';

const AumentaContador = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const randomIncrement = Math.floor(Math.random() * 10) + 1;
      setCount(prevCount => prevCount + randomIncrement);
    }, 1000);

    return () => clearInterval(intervalId);

  }, []);

  return (
    <div>
      <h1>Contador Aleatorio :</h1>
      <p>El contador aumenta aleatoriamente cada segundo:</p>
      <p>{count}</p>
    </div>
  );
};

export default AumentaContador;
