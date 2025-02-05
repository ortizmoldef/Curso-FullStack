"use client"
import { useState } from "react";
import "./ejer2.css";

function Div (){
    const [click,setClick] = useState(0)

    return(
        <div
        className= {'div ${click == 1 ? "click" : ""}} $'}
        onClick={() => setActive(1)}
        onDoubleClick={() => setClick()}
        >
          {click ? "Activo" : "Inactivo"}
        </div>
    )
}

export default Div