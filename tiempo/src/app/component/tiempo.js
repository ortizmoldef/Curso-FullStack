'use client'
import React, { useState } from "react";
import axios from 'axios'
import "./tiempo.css";

const Tiempo = () => {
    const [ciudad, setCiudad] = useState('')
    const [tiempoData, setTiempoData] = useState(null)
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false);

    const apiKey = "51b9a1db2969274b1a753021d87b583b";

    const handleCityChange = (event) => {
        setCiudad(event.target.value);
        if (event.target.value === '') {
            setTiempoData(null);
            setError('');
        }
    };

    const handleShowWeather = async () => {
        if (ciudad) {
            setTiempoData(null);
            setLoading(true);
            setError(''); 

            try {
                const response = await axios.get(
                    `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric&lang=es`
                );
                setTiempoData(response.data);
            } catch (error) {
                setError('No se pudo obtener el clima. Asegúrate de que la ciudad existe.');
            } finally {
                setLoading(false);
            }
        }
    };

    return (
        <div className="Tiempo">
            <h1>Clima de la Ciudad</h1>
            <input
                type="text"
                placeholder="Ingrese el nombre de la ciudad"
                value={ciudad}
                onChange={handleCityChange}
            />
            <button onClick={handleShowWeather}>Mostrar Clima</button>
            
            {loading && <p>Cargando...</p>}
            {error && <p style={{ color: 'red' }}>{error}</p>}

            {tiempoData && !loading && (
                <div>
                    <h2>{tiempoData.name}, {tiempoData.sys.country}</h2>
                    <p>Temperatura: {tiempoData.main.temp} °C</p>
                    <p>Humedad: {tiempoData.main.humidity} %</p>
                    <p>Condiciones: {tiempoData.weather[0].description}</p>
                </div>
            )}
        </div>
    );
}

export default Tiempo;
