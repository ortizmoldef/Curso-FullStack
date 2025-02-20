import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Inicio</Link> | <Link to="/new-task">Agregar tarea</Link>
    </nav>
  );
};

export default Navbar;
