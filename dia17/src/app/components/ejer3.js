'use client'

import { useState, useEffect, useRef } from "react"

function ValorPrevio() {
    const [contador, setContador] = useState(0)
    const prevContador = useRef(0)

    useEffect(() =>{
        prevContador.current = contador;
    },[contador])

    return(
        <div>
            <p>Valor actual: {contador}</p>
            <p>Valor Anterior: {prevContador.current}</p>
            <button onClick={() => setContador(contador + 1)} style={{border: "1px solid", padding: "5px"}}> Incrementar</button>
        </div>
    )
}

export default ValorPrevio