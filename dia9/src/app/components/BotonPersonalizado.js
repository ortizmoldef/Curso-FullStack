'use client'
import React from 'react';

const BotonPersonalizado = ({ children, onClick }) => {
  return (
    <button onClick={onClick} style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' , border: '2px solid black'}}>
      {children}
    </button>
  );
};


const BotonP = () => {
    const manejarClick = () => {
      alert('¡Botón presionado!');
    };
  
    return (
      <div>
        <h1>Ejemplo de Botón Personalizado</h1>
        <BotonPersonalizado onClick={manejarClick}>
          Hacer clic
        </BotonPersonalizado>
      </div>
    );
  };

  export default BotonP