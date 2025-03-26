import React from 'react';
import ReactDOM from 'react-dom/client'; // Asegúrate de importar desde 'react-dom/client'
import App from './App';

// Crear un "root" usando ReactDOM.createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));  // Crear el "root" en el elemento con id 'root'

// Usar .render() para renderizar el componente App
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
