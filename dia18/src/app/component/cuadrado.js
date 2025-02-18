'use client'
import { useContext } from "react";
import { ThemeContext } from './ejer3';
import "./ejer3.css"

const Cuadrado = () => {
    const { theme } = useContext(ThemeContext)

    return(
        <div className={`theme ${theme}`}></div>
    )
}

export default Cuadrado