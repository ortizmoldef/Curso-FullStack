"use client"
import { useState } from "react";

import Boton from "./components/ejer1"
import Div from "./components/ejer2"
import  Ul from "./components/ejer4"
import Li from "./components/ejer5"
import Tamanio from "./components/ejer6"
export default function Home() {

  const [darkMode,setDarkMode] = useState(false)

  return (
   <>
   <div className={`${darkMode ? "darkMode" : "normalMode"}`}>
   <h1 className="text-4x1 mb-3">Dia 11</h1>
   <section className="mb-5">
    <h2 className="text-2x1 mb-2">
      Ejercicio 1 : 
    </h2>
    <Boton/>
   </section>
   <section className="flex justify-center items-center">
    <h2 className="text-2x1 mb-2">
      Ejercicio 2 : 
    </h2>
    <Div/>
   </section>

   <section className="flex justify-center items-center">
    <h2 className="text-2x1 mb-2">
      Ejercicio 4 : 
    </h2>
    </section>
    <Ul/>


    <section className="flex justify-center items-center">
    <h2 className="text-2x1 mb-2">
      Ejercicio 5 : 
    </h2>
    </section>
    <Li/>

    <section className="flex justify-center items-center">
    <h2 className="text-2x1 mb-2">
      Ejercicio 6 : 
    </h2>
    </section>
    <Tamanio/>
   </div>

   </>
  );
}
