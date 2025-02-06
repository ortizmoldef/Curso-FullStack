"use client"
import React, { useState, useEffect } from 'react';

const Ajuste = () => {

    const [darkMode, setDarkMode] = useState(false);
    const [fontSize, setFontSize] = useState(16);

    const buttonStyle = {
        padding: '10px 20px',
        fontSize: '16px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };

    const ajusteStyles = {
        backgroundColor: darkMode ? '#333' : '#fff',
        color: darkMode ? '#fff' : '#333',
        fontSize: `${fontSize}px`,
        padding: '20px',
        height: '100vh',
        transition: 'all 0.5s ease',
    };

    const darkButtonStyle = {
        ...buttonStyle,
        backgroundColor: darkMode ? '#888' : '#ccc'
    };

    const lightButtonStyle = {
        ...buttonStyle,
        backgroundColor: darkMode ? '#ccc' : '#888'
    };


    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedMode = localStorage.getItem('darkMode');
            if (savedMode) {
                setDarkMode(JSON.parse(savedMode));
            }
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(prevMode => {
            const newMode = !prevMode;
            if (typeof window !== "undefined") {
                localStorage.setItem('darkMode', JSON.stringify(newMode));
            }
            return newMode;
        });
    };

    const incremento = () => {
        setFontSize(prevSize => Math.min(prevSize + 2,24));
    };

    const decremento = () => {
        setFontSize(prevSize => Math.max(prevSize - 2,12));
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setDarkMode(prevMode => {
                const newMode = !prevMode;
                if (typeof window !== "undefined") {
                    localStorage.setItem('darkMode', JSON.stringify(newMode));
                }
                return newMode;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);


    return (
        <div style={ajusteStyles}>
            <h1>Modo Claro / Oscuro y Ajuste del tamaño de la Fuente</h1>

            <button onClick={toggleDarkMode} style={darkButtonStyle}>
                Cambiar a {darkMode ? 'Modo claro' : 'Modo Oscuro'}
            </button>

            <div style={{marginTop:'20px'}}>
                <button onClick={incremento} style={lightButtonStyle}>
                    Aumentar Tamaño
                </button>

                <button onClick={decremento} style={darkButtonStyle}>
                    Disminuir Tamaño
                </button>
            </div>
            <p> Este texto cambia de tamaño y de color. </p>
        </div>
    );
};

export default Ajuste;
