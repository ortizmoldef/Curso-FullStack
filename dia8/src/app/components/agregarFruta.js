'use client';
import { useState } from 'react';

const ListaDeFrutas = () => {
    const [frutas, setFrutas] = useState(['Manzana', 'Banana', 'Naranja']);
    const [nuevaFruta, setNuevaFruta] = useState('');


    const agregarFruta = () => {
        if(nuevaFruta.trim() !==''){
            setFrutas([...frutas,nuevaFruta]);  
            setNuevaFruta('');
        }
    };


    return(
     <div>
        <h1>
            Lista de Frutas
        </h1>
        <ul>
            {frutas.map((fruta,index)=> (
                <li key={index}>{fruta}</li>
            ))}
        </ul>

       <input 
       type='text'
       value={nuevaFruta}
       onChange={(e) => setNuevaFruta(e.target.value)}
       placeholder='Agregar nueva fruta'
       />
       <button onClick={agregarFruta}>Agregar Fruta</button>
     </div>
    )
}

export default ListaDeFrutas;