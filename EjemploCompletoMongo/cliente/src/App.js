import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';  
import ListaProductos from './components/ListaProducto';
import Producto from './components/Producto';
import NuevoProductoForm from './components/NuevoProductoForm';
import EditarProductoForm from './components/EditarProductoForm';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Tienda</h1>
        <Routes>
          <Route path="/" element={<ListaProductos />} /> 

          <Route path="/producto/:id" element={<Producto />} />

          <Route path="/nuevo" element={<NuevoProductoForm />} />

          <Route path="/editar/:id" element={<EditarProductoForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
