const prompt = require("prompt-sync")();

function cuadrado(){

    let numero = prompt("¿Dime un numero?");

    let cuadrado = numero * numero;

    console.log("El cuadrado de " + numero + " es: " + cuadrado )
}

cuadrado()