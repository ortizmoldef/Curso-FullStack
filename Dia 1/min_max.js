function random(min,max){
    let random = Math.floor(Math.random() * (max - min));
    return random;
}

console.log(random(50,100))