"use client"

import { useState, useEffect } from "react"

function Ventana() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 600)

    useEffect (() => {
        const handleResize = () => setIsSmallScreen(window.innerWidth < 600);
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize)
    },[])

    const textStyle = {
        color: isSmallScreen ? "red" : "blue",
        fontSize: "24px",
        textAlign: "center"
    };

    return <h1 style={textStyle}> Cambia de color según el tamaño de la ventana</h1>
}

export default Ventana