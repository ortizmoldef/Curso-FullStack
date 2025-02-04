'use client'
import { useState, useEffect } from 'react';

const Temporizador = () =>{
    const [segundos, setSegundos] = useState(0); 

    useEffect (() =>{

        const Intervalo = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1);
        },1000);

        return() => {
            clearInterval(intervalo);
        };

    },[])

    return (
        <div>
            <h2>Ejercicio Temporizador : </h2>
            <p>Segundos Transcurridos: {segundos}</p>
        </div>
    )
}

export default Temporizador