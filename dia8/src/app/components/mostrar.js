const moviles = [{ id: 1, nombre: "Laptop", precio: 1200 },
                 { id: 2, nombre: "Celular", precio: 800 },
                 { id: 3, nombre: "Tablet", precio: 500 },]



const Productos = () =>{
    const productosFiltrados = moviles.filter((user) => user.precio > 700)

    return(
        <div>
            <h2>Ejercicio Mostrar mayores de $700</h2>
            {productosFiltrados.map((producto) => (
                <div key={producto.id}>
                    <h2>{producto.nombre}</h2>
                    <p>Precio : {producto.precio}</p>
                </div>
            ))}
        </div>
    )
}

export default Productos;
