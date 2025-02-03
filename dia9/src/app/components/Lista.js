import React from 'react';

const ComponentesLista = ({ children }) => {
  return (
    <ul>
      {children}
    </ul>
  );    
};

const Lista = () => {
    return (
        <div>
          <h1>Ejercicio Lista de Tareas :</h1>
          <ComponentesLista>
            <li>Comprar pan</li>
            <li>Lavar los platos</li>
            <li>Estudiar React</li>
          </ComponentesLista>
        </div>
      );
}

export default Lista

