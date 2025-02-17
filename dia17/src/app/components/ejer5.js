'use client'

import { useRef } from "react"

function ScrollAlFinal() {
    const divRef = useRef(null)

    const irAbajo = () => {
        if (divRef.current) {
            divRef.current.scrollTop = divRef.current.scrollHeight
        }
    }

    const irArriba = () => {
        if (divRef.current) {
            divRef.current.scrollTop = 0
        }
    }

    
    return(
        <div>
            <div
                ref={divRef}
                style={{ height: "100px", overflow:"auto", border:"1px solid black"}}
            >
              <p>Principio del Contenido</p>
              <p>Más contenido...</p>
              <p>Más contenido...</p>  
              <p>Más contenido...</p>  
              <p>Final del contenido</p>  
            </div>
            <button onClick={irArriba}>Ir al Principio</button>
            <button onClick={irAbajo}>Ir al final</button>
        </div>
    )
}

export default ScrollAlFinal;
