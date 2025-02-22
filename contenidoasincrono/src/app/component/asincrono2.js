'use client'
import { useEffect, useState } from "react";
import './asincrono2.css'; 

function Asin2() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        let controller = new AbortController();

        fetch('https://randomuser.me/api/?results=10', { signal: controller.signal })
            .then(res => {
                if (!res.ok) throw new Error("Error al obtener los datos");
                return res.json();
            })
            .then(data => setUsuarios(data.results))
            .catch(err => console.error("Error en la petición:", err));

        return () => controller.abort();
    }, []);

    return (
        <div className="container">
            <h2 className="title">Usuarios Aleatorios</h2>
            <ul className="userList">
                {usuarios.map((usuario, index) => (
                    <li key={index} className="userItem">
                        <img src={usuario.picture.medium} alt="Usuario" className="userImage" />
                        <div className="userInfo">
                            <div className="userName"> Nombre : {usuario.name.first} {usuario.name.last}</div>
                            <div className="userEmail">Correo Electronico: {usuario.email}</div>
                            <div className="userCountry"> Pais: {usuario.location.country}</div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Asin2;
