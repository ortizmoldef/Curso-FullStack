import React from 'react';

const TareaCompletada = ({ texto, completada }) => {
  return (
    <p style={{ textDecoration: completada ? 'line-through' : 'none' }}>
      {texto}
    </p>
  );
};

const Tarea = () =>{
    return (
    <div>
        <h1>Ejercicio Tareas : </h1>
      <TareaCompletada texto="Comprar pan" completada={false} />
      <TareaCompletada texto="Lavar los platos" completada={true} />
    </div>
    )
}


export default Tarea;