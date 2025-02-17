'use client'

import { useRef, useState } from "react"

function Temporizador() {
    const [segundos, setSegundos] = useState(0)

    const intervalRef = useRef(null)

    const iniciar = () =>{
        if(!intervalRef.current){
            intervalRef.current = setInterval(() => {
                setSegundos((s) => s + 1)
            }, 1000);
        }
    }

    const detener = () => {
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }

    return (
        <div>
            <p>
               Tiempo : {segundos} segundos 
            </p>
            <button onClick={iniciar} style={{border:"1px solid", paddingRight:"5px "}}>iniciar</button>
            <button onClick={detener}>Detener</button>
        </div>
    )
}

export default Temporizador