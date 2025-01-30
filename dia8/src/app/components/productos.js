const moviles = [{ id: 1, nombre: "Laptop", precio: 1200 },
                 { id: 2, nombre: "Celular", precio: 800 },
                 { id: 3, nombre: "Tablet", precio: 500 },]



const Producto = ({nombre,precio}) => {
    return (
        <div>
            <h2>Nombre: {nombre}</h2>
            <p>Precio: {precio}</p>
        </div>
    )
}

const ListaProductos = () =>  {
    return(
        <div>
             <h2>Ejercicio Mostrar Cada Producto</h2>
        {moviles.map(
            (user) => (
            <Producto key={user.id} nombre={user.nombre} precio={user.precio}/>
            ))}
        </div>
    )
}

export default ListaProductos;