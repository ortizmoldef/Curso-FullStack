"use client"
import { Children, useState } from "react";
import "./ejer4.css";

function Li ({Children}){
  const [active,setActive] = useState(false)

  return(
     <li className={`${active ? "li active": "li"}`}
     onClick={() => setActive(!active)}
     >
        Elemento : {Children}
     </li>
  )
}


function Ul (){
    return(
       <ul className="flex justify-center items-center">
        {
          [...Array(10)].map((x,i) =>
            <Li key={i}>{i}</Li>
          )}
       </ul>
    )
}

export default Ul