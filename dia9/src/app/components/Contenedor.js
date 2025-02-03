const Contenedor = ({children}) => {
    return (
        <div className="contenedor">
            <section>
                {children}
            </section>
        </div>
    )
}

const Contenido = () =>{
    return (
        <Contenedor>
            <div>
                <h1>Ejercicio Contenedor : </h1>
                <h2> Este es un titulo</h2>
                <p>Este es un párrafo dentro del contenedor</p>
            </div>
           
        </Contenedor>
    )
}

export default Contenido