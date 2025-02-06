"use client"
import { useState } from 'react';

const Estilos = () => {
    
    const [isRed, setIsRed] = useState(true);

    const toggleColor = () => {
        setIsRed(!isRed)
    }

    const stylesButton = (isRed) =>{
        return {
            backgroundColor: isRed ? 'red' : 'blue',
            color: 'white',
            padding: '10px 20px',
            fontSize: '16px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
        }
    }

    return(
        <div>
            <button
            onClick={toggleColor}
            style={stylesButton(isRed)}
            >
                Haz click para cambiar el color del boton
            </button>
        </div>
    )
}

export default Estilos