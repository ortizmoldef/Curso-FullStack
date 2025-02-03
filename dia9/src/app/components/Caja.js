
import React from "react"

const ComponenteCaja  = ({children}) => {
    return (
        <div style={{ border: '2px solid black', padding: '20px' }}>
          {children}
        </div>
      );
}

const Caja = () => {
    return (
        <div>
            <h1>Ejercicio Caja : </h1>
          <ComponenteCaja>
            <h2>Este es el contenido dentro de la caja</h2>
            <p>Más contenido puede ir aquí.</p>
          </ComponenteCaja>
        </div>
      );
}

export default Caja