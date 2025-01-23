var colors = require('colors');
const figlet = require('figlet');

//Ejercicio 1
let a = [1,2,3,4,5,6,7,8,9,10]

console.log("Ejercicio 1 : " + a)

// Ejercicio 2

let a2 = [1,2,3,4,5,6,7,8,9,10]

console.log("Ejercicio 2 : " + a2[3],a2[6])

// Ejercicio 3

let a3 = [1,2,3,4,5,6,7,8,9,10]

console.log("Ejercicio 3 : " + a3.length)

// Ejercicio 4

let a4 = [1,2,3,4,5,6,7,8,9,10]

a4.unshift("11")

console.log("Ejercicio 4 : " + a4)

// Ejercicio 5

let a5 = [1,2,3,4,5,6,7,8,9,10]

a4.push("22")

console.log("Ejercicio 5 : " + a4)

// Ejercicio 6

let a6 = [1,2,3,4,5,6,7,8,9,10]

a6.splice(5,1)
a6.splice(6,1)

console.log("Ejercicio 6 : " + a6)

// Ejercicio 7

let a7 = ["1","2","3"]


console.log("Ejercicio 7 : " + a7.indexOf("2"))


// Ejercicio 8

let a8 = [1,2,3,4,5,6,7,8,9,10]


console.log("Ejercicio 8 : " + a8.reverse())


// Ejercicio 9

let a9 = [1,2,3,4,5,6,7,8,9,10]

console.log("Ejercicio 9 : " + a8.toString())

// Ejercicio 10

let a10 = "Hola, cómo estás, hoy es un buen día";

let array = a10.split(" "); 

console.log("Ejercicio 10 : " + array)


// Ejercicio 11

let a11 = ["Hola,", "cómo", "estás,", "hoy", "es", "un", "buen", "día"];

for (let i = 0; i < a11.length; i++) {
    console.log(` Ejercicio 11: Índice: ${i}, Valor: ${a11[i]}`);
}

// Ejercicio 12

let a12 = ["Hola,", "cómo", "estás,", "hoy", "es", "un", "buen", "día"];

for (let i = 0; i < a12.length; i++) {
    a12[i] = a12[i] + " - Modificado 12"; 
    console.log(`Ejercicio 12 : Índice: ${i}, Valor: ${a12[i]}`);
}

// Ejercicio 13

let a13 = ["Hola,", "cómo", "estás,", "hoy", "es", "un", "buen", "día"];

let valorBuscado = "hoy"; // Valor que buscas

let encontrado = a13.find(valor => valor === valorBuscado);

console.log(`Ejercicio 13: El Valor encontrado: ${encontrado}`);

// Ejercicio 14

let a14 = ["Hola,", "cómo", "estás,", "hoy", "es", "un", "buen", "día"];

let filtrado = a14.filter(valor => valor.includes("o"))

console.log("Ejercicio 14 : " + filtrado)

// Ejercicio 15

const alumno = ['Timmy', 'Garcia', 'Diseño Web']

const [nombre,apellido, curso]  = alumno

console.log("Ejercicio 15 : " + alumno)

//Ejercicio 16

function suma(x,y,z){
    return x + y + z;
}

const numbers = [1,2,3,4];

console.log("Ejercicio 16 : " + suma(...numbers));

// Ejercicio 16 - 1

function segundo(){
    const array1 = [1,2,3]
    const obj = {...array1};
    return obj;
}

const obj = segundo();

console.log("Ejercicio 16 - 1: " , obj)


console.log("Has accedido Correctamente".green)
console.log("Tienes una alerta".yellow)
console.log("Un Fallo!!!".red)


figlet('¡Hola Mundo!', (err, data) => {
    if (err) {
      console.log('Algo salió mal...');
      return;
    }
    console.log(data);
  });


    const cliProgress = require('cli-progress');
    const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
    bar.start(100, 0);

    let progress = 0;
    const interval = setInterval(() => {
    progress += 1;
    bar.update(progress);
    if (progress === 100) {
    clearInterval(interval);
    bar.stop();
    }
    }, 50);
