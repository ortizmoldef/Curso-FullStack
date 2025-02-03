const Tarjeta = ({children}) =>{
    return (
        <div>
            <h1>Ejercicio Children!</h1>
            <div className="tarjeta">{children}</div>
        </div>
    )
  
}


const ContenidoTarjeta = () =>{
    return <Tarjeta>¡Hola, soy un contenido dentro de children!</Tarjeta>;
}

export default ContenidoTarjeta