'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../css/header.css';
import Image from 'next/image';

const Header = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  const apiKey = '51b9a1db2969274b1a753021d87b583b';  // Tu API Key de OpenWeatherMap
  const city = 'Madrid, ES';  // Ciudad a consultar
  const units = 'metric';  // Mostrar la temperatura en grados Celsius

  useEffect(() => {
    // Realizar la solicitud a la API cuando el componente se monte
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}&lang=es`)
      .then(response => {
        setWeatherData(response.data);  // Almacenar los datos del clima
      })
      .catch(error => {
        setError('Error al obtener los datos del clima');  // Manejar el error
        console.error('Error al obtener los datos:', error);
      });
  }, []);  // El array vacío significa que solo se ejecutará cuando el componente se monte

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div id="weather" className="weather">
      {weatherData ? (
        <div className="weather-info">
          <Image
            id="weather-icon"
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
            alt={weatherData.weather[0].description}
            width={50}
            height={50}
            className="weather-icon"
          />
        </div>
      ) : (
        <span>Cargando...</span>
      )}
    </div>
  );
};
  export default Header;