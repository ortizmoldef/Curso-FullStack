const frutas = ["Manzana", "Banana", "Cereza", "Durazno", "Fresa"]

const Fruta = () => {
    return (
        <div>
            <h2>Ejercicio Frutas</h2>
        <ul>
            {frutas.map((nombre,index) => (
             <li key={index}>{nombre}</li>
            ) 
        )}
        </ul>
        </div>
    )
}

 export default Fruta;