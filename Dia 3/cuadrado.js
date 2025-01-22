function cuadrado(alto,ancho){
    if (alto === ancho) {
        const area = alto * ancho;
        console.log(`El área del cuadrado es: ${area}`);
    } else {
        console.log("Los valores proporcionados no corresponden a un cuadrado, ya que el alto y el ancho deben ser iguales.");
    }
    }

cuadrado(4,4)
cuadrado(4,5)