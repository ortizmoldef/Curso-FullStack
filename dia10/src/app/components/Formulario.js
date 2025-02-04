'use client'
import { useState } from 'react';

const Formulario = () => {
    
    const [valor, setValor] = useState('');
    const [mensaje, setMensaje] = useState('');

    const handleInputChange = (event) => {
        setValor(event.target.value); 
      };

      const handleSubmit = (event) => {
        event.preventDefault();
        setMensaje(valor); 
      };

      return (
        <div>
          <h2>Ejercicio Formulario : </h2>
          <form onSubmit={handleSubmit}>
            <input 
              type="text" 
              value={valor} 
              onChange={handleInputChange} 
              placeholder="Escribe algo..." 
            />
            <br />
            <button type="submit" style={{ padding: '8px 12px' }}>
              Enviar
            </button>
          </form>
          {mensaje && <p>El Valor ingresado es : {mensaje}</p>}
        </div>
      );  
};

export default Formulario;