'use client'
import { useEffect, useState } from "react";
import './asincrono1.css'; 

function Asin1() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        let controller = new AbortController();
        let option = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            signal: controller.signal
        };

        fetch('https://fakestoreapi.com/users', option)
            .then(res => {
                if (!res.ok) throw new Error("Error al obtener los datos");
                return res.json();
            })
            .then(data => setUsuarios(data))
            .catch(err => console.error("Error en la petición:", err));

        return () => controller.abort();
    }, []);

    return (
        <div className="container">
            <h2 className="title">Lista de Usuarios</h2>
            <ul className="userList">
                {usuarios.map((usuario) => (
                    <li key={usuario.id} className="userItem">
                        <strong>Nombre:</strong> {usuario.name.firstname} {usuario.name.lastname} <br />
                        <strong>Email:</strong> {usuario.email} <br />
                        <strong>Teléfono:</strong> {usuario.phone}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Asin1;
