import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Libros from './components/Libros';
import CrearLibro from './components/crearLibros';
import Register from './components/Registro';
import Login from './components/Login';
import './global.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState('user');  // Estado para el rol del usuario

  // Verificar si el usuario está logueado y obtener su rol al cargar la página
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');  // Obtener el rol del usuario

    if (token) {
      setIsLoggedIn(true);
      if (storedRole) {
        setRole(storedRole);  // Establecer el rol
      }
    }
  }, []);

  // Manejar el logout
  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('role');
    
    setIsLoggedIn(false);
    setRole('user');  // Restablecer el rol al valor por defecto
  };

  return (
    <Router>
      <div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">📚 Libros</Link>
            </li>
            {role === 'admin' && (
              <li className="nav-item">
                <Link to="/crear-libro" className="nav-link">✍️ Crear Libro</Link>
              </li>
            )}
            <li className="nav-item">
              <Link to="/register" className="nav-link">📝 Registro</Link>
            </li>
            {!isLoggedIn && (
              <li className="nav-item">
                <Link to="/login" className="nav-link">🔑 Iniciar Sesión</Link>
              </li>
            )}
            {isLoggedIn && (
              <li className="nav-item">
                <button onClick={handleLogout} className="nav-link">🚪 Cerrar Sesión</button>
              </li>
            )}
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Libros />} />
          {role === 'admin' && (
            <Route path="/crear-libro" element={<CrearLibro />} />
          )}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
