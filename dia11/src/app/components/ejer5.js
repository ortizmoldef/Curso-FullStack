"use client"
import {useState } from "react";
import "./ejer5.css";

function Li (){
   const [active,setActive] = useState(false)

  return(
    <div
      className={active ? "div active": "div"}
      onMouseEnter={() => setActive(true)}
      onMouseLeave={() => setActive(false)}

    >

    </div>
  )
}



export default Li