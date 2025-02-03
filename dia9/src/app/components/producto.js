const Producto = ({info}) => {
    return (
        <div>
            <h1>Ejercicio Productos : </h1>
            <ul>
                <li>
                    <h2>{info.nombre}</h2>
                    <p>Precio: {info.precio}</p>
                </li>
            </ul>
        </div>
    );
};

const Productos = () =>{
    const prodData = { nombre: "Platano",precio: 25 }
    return <Producto info={prodData} />
}

export default Productos;