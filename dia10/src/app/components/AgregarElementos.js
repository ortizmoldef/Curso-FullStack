"use client"
import { useState } from 'react';


const AgregarElementos = () => {
    const [items, setItems] = useState([]);

    const [inputValue, setInputValue] = useState('');

    const addItem = () => {
        if (inputValue.trim()) {
          setItems([...items, inputValue]);
          setInputValue(''); 
        }
      };
    
      return(
        <div>
            <h1>Lista de Elementos</h1>
            <input 
             type='text'
             value={inputValue}
             onChange={(e) => setInputValue(e.target.value)}
             placeholder='Escribe aqui un elemento.'
            />
            <button onClick={addItem}>
                Agregar
            </button>

            <ul>
                {items.map((item, index) => (
                <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
      );
};

export default AgregarElementos