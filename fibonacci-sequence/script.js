function* fibonacciGenerator() {
    let x = 0;
    let y = 1;
    yield 0;
    yield 1;
    while (true) {
        [x, y] = [y, y+x];
        yield y;
    }
}
const fibGen = fibonacciGenerator();
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);
console.log(fibGen.next().value);