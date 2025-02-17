'use client'
import { useState, useRef, useEffect } from "react"

function ContadorRenders() {
    const [count, setCount] = useState(0)
    const renders = useRef(1)

    useEffect(() => {
        renders.current += 1;
    }); 


    return (
        <div>
            <p>Contador: {count}</p>
            <p>Renders: {renders.current}</p>
            <button onClick={() => setCount(count + 1)} style={{border:" 1px solid", padding: "5px"}}>
                Incrementar contador
            </button>
        </div>
    )
}

export default ContadorRenders
