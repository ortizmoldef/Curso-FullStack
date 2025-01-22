const prompt = require("prompt-sync")();

function nombre(){
    const name = prompt("¿Cual es tu nombre?")

    console.log(`Hola ${name}`)
}

nombre()