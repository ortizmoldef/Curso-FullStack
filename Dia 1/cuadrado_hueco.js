function dibujarRectangulo(ancho, alto) {
    let result = '';
  
    // linea de arriba
    for (let i = 0; i < ancho; i++) {
      result += '* ';
    }
  
    result += '\n';
  
    // cuerpo del rectangulo
    for (i = 0; i < alto - 2; i++) {
      result += '*' + ' '.repeat(ancho * 2 - 3) + '*\n';
    }
  
    // linea de abajo
    for (let i = 0; i < ancho; i++) {
      result += '* ';
    }
  
    return result;
  }
  
  console.log(dibujarRectangulo(5, 5));