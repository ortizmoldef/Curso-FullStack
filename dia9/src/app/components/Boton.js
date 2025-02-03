'use client'

const ClicBoton = ({onClick}) => {
    return (
    <div>
        <h1>Ejercicio Boton : </h1>
        <button onClick={onClick}>Haz Clic</button>
    </div>
)
};

const Boton = () => {
    const mostrarAlerta = () => {
        alert("Has presionado el boton!");
    };

    return <ClicBoton onClick={mostrarAlerta} />
};

export default Boton
