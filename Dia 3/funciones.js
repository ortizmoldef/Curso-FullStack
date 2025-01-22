const prompt = require("prompt-sync")();

function saludar(nombre){
    console.log(`Hola ${nombre}`);
}

function procesarEntradaUsuario(saludar) {
    const nombre = prompt("¿Cuál es tu nombre?");
    
    saludar(nombre);
    
  }

  procesarEntradaUsuario(saludar);