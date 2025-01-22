const prompt = require("prompt-sync")();

function anterior(){
    let numero = prompt("¿Dime un numero?");

    let resultado = 1;

    for(let i = 1; i <= numero; i++){
        resultado *= i;
    }

    console.log("El producto de " + numero + " por todos los números anteriores es: " + resultado);
}




anterior();