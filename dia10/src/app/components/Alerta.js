"use client"

import React from 'react';

const Alerta = () =>{
    const handleClick = () =>{
        alert("¡Has hecho clic en el botón!")
    };

    return(
        <div>
            <h1>
                Boton de Alerta :
            </h1>
            <button onClick={handleClick}> Haz Clic</button>
        </div>
    )
}

export default Alerta;