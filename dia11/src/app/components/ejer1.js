"use client"
import { useState } from "react";
import "./ejer1.css";

function Boton (){
    const [active,setActive] = useState(false)

    return(
        <button
        className= {active ? "btn active" : "btn"}
        onClick={() => setActive(!active)}
        >
          {active ? "Activo" : "Inactivo"}
        </button>
    )
}

export default Boton