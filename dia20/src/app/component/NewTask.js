import React, { useState } from "react";
import { useTaskContext } from "./TaskContext"; 
import { useNavigate } from "react-router-dom"; 

const NewTask = () => {
  const [title, setTitle] = useState(""); 
  const [description, setDescription] = useState(""); 
  const { addTask } = useTaskContext(); 
  const navigate = useNavigate(); 

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { id: Date.now(), title, description }; 
    addTask(newTask);
    navigate("/"); 
  };

  return (
    <div>
      <h1>Agregar Nueva Tarea</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Descripción:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </div>
  );
};

export default NewTask
