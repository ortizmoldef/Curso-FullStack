const Saludo = ({nombre}) => {
    return (
        <div>
            <h1>Ejercicio Saludo: </h1>
            <h2> Hola, {nombre}! </h2>
        </div>
    )
} 

const SaludoPersona = () => {
    return <Saludo  nombre="Manuel"/>
}

export default SaludoPersona