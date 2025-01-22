const prompt = require("prompt-sync")();


function calculadora() {

    let operacion = prompt("¿Qué operación deseas realizar? (+, -, *, /)");
    let num1 = parseFloat(prompt("Introduce el primer número:"));
    let num2 = parseFloat(prompt("Introduce el segundo número:"));
    let resultado;

    
    switch (operacion) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            if (num2 === 0) {
                console.log("No se puede dividir entre 0.");
                return;
            }
            resultado = num1 / num2;
            break;
        default:
           console.log("Operación no válida.");
            return;
    }

        console.log("El resultado de " + num1 + " " + operacion + " " + num2 + " es: " + resultado);
}

calculadora();
