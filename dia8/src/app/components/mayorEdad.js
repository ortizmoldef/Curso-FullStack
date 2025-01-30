const usuarios = [
    { id: 1, nombre: "Ana", edad: 25 },
    { id: 2, nombre: "Luis", edad: 17 },
    { id: 3, nombre: "Carlos", edad: 22 },
    { id: 4, nombre: "Marta", edad: 15 },
]

const Usuarios = () =>{
    const usuariosFiltrados = usuarios.filter((user) => user.edad > 18)
    return(
        <div>
            <h2>Ejercicio Mostrar mayores de 18</h2>
            {usuariosFiltrados.map((usuarios) => (
                <div key={usuarios.id}>
                    <h2>{usuarios.nombre}</h2>
                    <p>Edad : {usuarios.edad}</p>
                </div>
            ))}
        </div>
    )
}

export default Usuarios;
