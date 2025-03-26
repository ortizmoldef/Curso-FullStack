import { useState, useEffect } from "react";
import axios from "axios";

// Usa la URL desde las variables de entorno
const apiUrl = process.env.REACT_APP_API_URL;

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get(`${apiUrl}/user`)
            .then((response) => {
                if (Array.isArray(response.data)) {
                    setUsers(response.data); 
                } else {
                    console.error("La respuesta no es un array", response.data);
                }
            })
            .catch((error) => console.error("Error al obtener los usuarios:", error));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(`${apiUrl}/user`, { name, email })
            .then((response) => {
                // Aquí es donde integras el código que mencionaste
                if (response.data.dato && response.data.user) {
                    console.log(response.data.dato); // Muestra el mensaje "Datos añadidos nuevos"
                    setUsers([...users, response.data.user]); // Añadir el usuario recién creado
                    setName(""); // Limpiar el campo de nombre
                    setEmail(""); // Limpiar el campo de correo
                } else {
                    console.error("Respuesta inesperada:", response.data);
                }
            })
            .catch((error) => console.error("Error al agregar usuario:", error));
    };

    const handleUpdate = (id, updatedName, updatedEmail) => {
        if (!Array.isArray(users)) {
            console.error("users no es un array:", users);
            return;
        }
    
        axios
            .put(`${apiUrl}/user/${id}`, { name: updatedName, email: updatedEmail })
            .then(() => {
                setUsers(users.map(user => user.id === id ? { ...user, name: updatedName, email: updatedEmail } : user));
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = (id) => {
        axios
            .delete(`${apiUrl}/user/${id}`)
            .then(() => {
                setUsers(users.filter(user => user.id !== id));
            })
            .catch((error) => console.error(error));
    };

    return (
        <div>
            <h1>Usuarios</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Nombre"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Correo"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <button type="submit">Agregar</button>
            </form>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        {user.name} - {user.email}
                        <button onClick={() => handleUpdate(user.id, prompt("Nuevo nombre", user.name), prompt("Nuevo correo", user.email))}>Actualizar</button>
                        <button onClick={() => handleDelete(user.id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
