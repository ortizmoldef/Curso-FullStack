'use client'
import { useContext } from "react";
import { ThemeContext } from './ejer3';

const ThemeToggle = () => {
    const { theme, setTheme } = useContext(ThemeContext)

    return(
        <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
            Cambiar a {theme === "light" ? "Oscuro" : "claro"}
        </button>
    )
}

export default ThemeToggle