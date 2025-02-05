"use client"
import React, { useState, useEffect } from "react";
import "./tema.css"


function Tema(){

    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isAnimated, setIsAnimated] = useState(false);

    useEffect(() => {
        const storedDarkMode  = localStorage.getItem("darkMode") == true
        const storedAnimated = localStorage.getItem("animated") == true

        setIsDarkMode(storedDarkMode)
        setIsAnimated(storedAnimated)

    }, []);


    const toggleMode = () => {
        setIsDarkMode((prevMode ) =>{
            const newMode = !prevMode;
            localStorage.setItem("darkMode",newMode);
            return newMode;
        });
    };

    const toggleAnimation = () => {
        setIsAnimated((prev) => {
            const newState = !prev;
            localStorage.setItem("animated",newState)
            return newState;
        })
    }


    return(
        <div
            className={`App ${isDarkMode ? "dark" : "light"} ${isAnimated ? "animted" : ""}`}
        >
        <div className="content">
            <h1>
                {isDarkMode ? "Modo Oscuro" : "Modo Claro"}
            </h1>
            <p>
                Cambio de Modo Claro a Oscuro
            </p>

            <button onClick={toggleMode}>
                Cambiar a {isDarkMode ? "Modo Claro" : "Modo Oscuro"}
            </button>

            <button onClick={toggleAnimation}>
               {isAnimated ? "Desactivar Animación" : "Activar Animación"}
            </button>
        </div>
    </div>
    );
}

export default Tema