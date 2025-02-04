'use client'
import { useState } from 'react';

const ColorDiv = () =>{
    const [color, setColor] = useState('red');

    const handleMouseEnter = () =>{
        setColor('yellow')
    }

    const handleMouseLeave = () =>{
        setColor('blue')
    }

    return(
        <div style={{ width: '100px', height: '100px', backgroundColor: color }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        >
            Pasar el raton por aqui
        </div>

    )
}

export default ColorDiv