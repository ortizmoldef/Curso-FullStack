const ContenidoAlerta = ({children}) => {
    return (
        <div className="alerta">
            {children}
        </div>
    )
}

const Alerta = () =>{
    return (
        <ContenidoAlerta>
            <div>
                <h1>Ejercicio Alerta :</h1>   
                <p>Este mensaje es una alerta!</p>
            </div>
        </ContenidoAlerta>
    )
}

export default Alerta