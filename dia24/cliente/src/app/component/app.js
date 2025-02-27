'use client'
import { useEffect, useState } from "react";

function App() {
    const [items, setItems] = useState([]);
    const [newItemName, setNewItemName] = useState("");
    const [itemToUpdate, setItemToUpdate] = useState(null); 
    const [updatedName, setUpdatedName] = useState(""); 
    const [errorMessage, setErrorMessage] = useState(""); 

    const getItems = async () => {
        try {
            const response = await fetch("http://localhost:5000/api/items");
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error("Error al obtener los datos:", error);
        }
    };

    const createItem = async () => {

        if (!newItemName.trim()) {
            setErrorMessage("El nombre del ítem no puede estar vacío."); // Mostrar mensaje de error
            return;
        }

        const newItem = { name: newItemName };
        try {
            const response = await fetch("http://localhost:5000/api/items", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newItem),
            });
            const data = await response.json();
            setItems([...items, data]);
            setNewItemName("");
            setErrorMessage(""); 
        } catch (error) {
            console.error("Error creando el item:", error);
        }
    };

    const updateItem = async (id) => {
        if (!updatedName) return;  
        const updatedItem = { name: updatedName };
        try {
            const response = await fetch(`http://localhost:5000/api/items/${id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(updatedItem),
            });
            const data = await response.json();
            setItems(items.map((item) => (item.id === id ? data : item)));
            setItemToUpdate(null);  
            setUpdatedName("");  
        } catch (error) {
            console.error("Error actualizando el item:", error);
        }
    };

    const deleteItem = async (id) => {
        try {
            const response = await fetch(`http://localhost:5000/api/items/${id}`, {
                method: "DELETE",
            });
            const data = await response.json();
            setItems(items.filter((item) => item.id !== id));
        } catch (error) {
            console.error("Error eliminando el item:", error);
        }
    };

    useEffect(() => {
        getItems();
    }, []);

    return (
        <div>
            <h1>Lista de Items</h1>
            <div>
                <h3>Crear nuevo item</h3>
                <input
                    type="text"
                    value={newItemName}
                    onChange={(e) => setNewItemName(e.target.value)}
                    placeholder="Nombre del nuevo item"
                />
                <button onClick={createItem}>Crear</button>
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </div>
            
            {itemToUpdate && (
                <div>
                    <h3>Actualizar item</h3>
                    <input
                        type="text"
                        value={updatedName}
                        onChange={(e) => setUpdatedName(e.target.value)}
                        placeholder="Nuevo nombre"
                    />
                    <button onClick={() => updateItem(itemToUpdate.id)}>Actualizar</button>
                </div>
            )}

            <div>
                <ul>
                    {items.map((item) => (
                        <li key={item.id}>
                            {item.name}
                            <button onClick={() => setItemToUpdate(item)}>Seleccionar para actualizar</button>
                            <button onClick={() => deleteItem(item.id)}>Eliminar</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;
