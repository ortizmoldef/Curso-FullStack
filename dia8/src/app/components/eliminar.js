'use client';
import {useState} from 'react'


const LibrosEditable = () => {
    const [libros, setLibros] = useState([
        { id: 1, texto: "Hacer ejercicio" },
        { id: 2, texto: "Leer un libro" },
        { id: 3, texto: "Aprender React" },
    ]);

    const eliminarLibros = (id) => {
        setLibros(libros.filter((libro) => libro.id !== id));
    };


    return(
        <div>
            <h1> Ejercicio Eliminar</h1>
            <br></br>
            {libros.map((libro) => (
                <div key={libro.id}>
                 <span>{libro.texto}</span>
                <button onClick={() => eliminarLibros(libro.id)}>Eliminar</button>
                </div>
            ))}
        </div>
    )
}

export default LibrosEditable;