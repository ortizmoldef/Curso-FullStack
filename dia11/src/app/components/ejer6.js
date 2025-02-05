"use client"
import {useState } from "react";
import "./ejer6.css";

function Tamanio (){
   const [width,setWidth] = useState(0)

  return(
    <div
      className="container"
      onClick={() => setWidth((w) => w + 10 )}
    >
      <div className="bar" 
      style={{width: `${width}%`}
      
      
      }>

      </div>
    </div>
  )
}



export default Tamanio