const Usuario = ({info}) => {
    return (
        <div>
            <h1>Ejercicio Perfil : </h1>
            <h2>{info.nombre}</h2>
            <p>Edad: {info.edad}</p>
        </div>
        

    );
};

const Perfil = () =>{
    const usuarioData = { nombre: "Pepe",edad: 25 }
    return <Usuario info={usuarioData} />
}

export default Perfil;