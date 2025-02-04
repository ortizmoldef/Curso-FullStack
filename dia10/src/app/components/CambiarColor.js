"use client"
import { useState, useEffect } from 'react';

const CambiarColorFondo = () =>{
    const [bgColor, setBgColor] = useState('white');

    useEffect(() =>{
        const colors = ['red', 'blue', 'green', 'yellow', 'purple'];

        const CambiarColor = () => {
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            setBgColor(randomColor);
          };

        const intervalId = setInterval(CambiarColor, 3000);

        return () => clearInterval(intervalId);

    }, []);

    return (
        <>
        <div>
            <h1>Ejercicio Cambiar Color : </h1>
        </div>
        <div style={{ backgroundColor: bgColor, height: '10vh' }}>
          <h1 style={{ textAlign: 'center'}}>
            ¡El color de fondo cambia cada 3 segundos!
          </h1>
        </div>
        </>
      );
};

export default CambiarColorFondo;