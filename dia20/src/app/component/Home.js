import React from 'react';
import { useTaskContext } from './TaskContext'; 
import { Link } from "react-router-dom";

const Home = () => {
  const { tasks } = useTaskContext(); 
  return (
    <div>
      <h1>Lista de Tareas</h1>
      {tasks.length === 0 ? (
        <p>No hay tareas disponibles.</p>
      ) : (
        <ul>
          {tasks.map((task) => {
            console.log(task.id); 
            return (
              <li key={task.id}>
                <Link to={`/task/${task.id}`}>
                  {task.title}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Home;
