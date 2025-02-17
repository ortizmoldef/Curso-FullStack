'use client'
import { useRef } from "react";

function InputAutoFocus(){
    const inputRef = useRef(null);

    const handleFocus = () => {
        inputRef.current.focus()
        inputRef.current.value = "Texto añadido con useRef"
    }

    return(
        <div>
            <input ref={inputRef} placeholder="Escribe aqui..."/>
            <button onClick={handleFocus}>Enfocar Input</button>
        </div>
    )
}

export default InputAutoFocus

