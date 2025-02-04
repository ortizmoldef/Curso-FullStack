'use client'
import { useState } from 'react';

const ContadorAleatorio = () =>{
    const [contador, setContador] = useState(0);
    
    const aumentarContador = () => {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        setContador(contador + numeroAleatorio);
      };

      return (
        <div >
            <h1> Ejercicio Contador : </h1>
            <p>Contador : {contador}</p>
            <button onClick={aumentarContador}>Aumentar Contador</button>
        </div>
    )
}

export default ContadorAleatorio;

    