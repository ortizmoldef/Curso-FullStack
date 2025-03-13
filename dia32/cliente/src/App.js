import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Libros from './components/Libros';
import CrearLibro from './components/crearLibros';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Libros />} />
          <Route path="/crear-libro" element={<CrearLibro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
