'use client';
import {useState} from 'react'

const nombres = [
    {id: 1, nombre: "Ana"},
    {id: 2, nombre: "Luis"}, 
    {id: 3, nombre: "Carlos"}, 
    {id: 4, nombre: "Marta"}, 
    {id: 5, nombre: "Pedro"}, 
    {id: 6, nombre: "María"}]

const BuscadorUsuarios = () => {
    const [busqueda,setBusqueda] = useState("");

    const nombresFiltrados = nombres.filter((user) => 
        user.nombre.toLowerCase().includes(busqueda.toLowerCase())
    );

    return (
        <div>
            <h2>Ejercicio input</h2>
            <input
            type='text'
            placeholder='Buscar Usuario...'
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)} 
        />
        <ul>
            
            {nombresFiltrados.map((user) => (
                <li key={user.id}>{user.nombre}</li>
            ))}
        </ul>    
        </div>
    )
}

export default BuscadorUsuarios;