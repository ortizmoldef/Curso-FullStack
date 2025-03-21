import { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [users, setUsers] = useState([]);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    useEffect(() => {
        axios.get("http://localhost:5000/user").then((response) => {
            setUsers(response.data);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:5000/user", { name, email })
            .then((response) => {
                setUsers([...users, response.data]);
                setName("");
                setEmail("");
            })
            .catch((error) => console.error(error));
    };

    const handleUpdate = (id, updatedName, updatedEmail) => {
        axios
            .put(`http://localhost:5000/user/${id}`, { name: updatedName, email: updatedEmail })
            .then(() => {
                setUsers(users.map(user => user.id === id ? { ...user, name: updatedName, email: updatedEmail } : user));
            })
            .catch((error) => console.error(error));
    };

    const handleDelete = (id) => {
        axios
            .delete(`http://localhost:5000/user/${id}`)
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
