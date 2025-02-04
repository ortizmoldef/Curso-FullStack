'use client'
import React, { useState } from 'react';

const CampoTexto = () =>{
    const [text, setText] = useState('');

    const handleChange = (event) =>{
        setText(event.target.value);
    } 

    return (
        <div>
          <h1>Campo de texto con estado</h1>
          <input
            type="text"
            value={text}
            onChange={handleChange} 
            placeholder="Escribe algo..."
          />
          <p>Texto ingresado: {text}</p>
        </div>
      );
}

export default CampoTexto