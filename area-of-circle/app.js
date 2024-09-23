function calcArea(dia) {
    dia /= 2;
    return parseFloat(dia*dia*Math.PI).toFixed(2);
}

console.log(calcArea(5)); //19.63