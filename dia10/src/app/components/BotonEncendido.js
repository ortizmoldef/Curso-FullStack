'use client'
import { useState } from 'react';

const BotonEncendidoApagado = () => {
    const [estado,setEstado] = useState(false);

    const toggleEstado = () => {
        setEstado(!estado);
    };

    return(
        <div>
            <h1>Ejercicio Boton Encendido / Apagado : </h1>
            <button onClick={toggleEstado}>
                {estado ? 'Apagado' : 'Encendido'}
            </button>
            <p>Estado: {estado ? 'Encendido' : 'Apagado'}</p>
        </div>
    );
};

export default BotonEncendidoApagado;