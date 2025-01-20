function pyramid(numPisos) {
    for (let i = 0; i < numPisos; i++) {
      let piso = '';
      
      for (let j = 1; j < numPisos - i; j++) {
        piso = piso + ' ';
      }
  
      for (let j = 0; j < i + 1; j++) {
        piso = piso + '*';
      }
      console.log(piso);
    }
  }
  
  pyramid(5);