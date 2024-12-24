# Fibonacci Sequence Generator

## Description

This project implements a generator function in JavaScript to yield numbers from the Fibonacci sequence. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two.

## Task Statement

Implement a generator function that yields the numbers of the Fibonacci sequence starting from the beginning.

### Fibonacci Sequence Formula

- F(0) = 0
- F(1) = 1
- For each i ≥ 2: F(i) = F(i−1) + F(i−2)

---

## Code

```javascript
function* fibonacciGenerator() {
    let x = 0;
    let y = 1;
    yield 0;
    yield 1;
    while (true) {
        [x, y] = [y, y + x];
        yield y;
    }
}

// Example usage
const fibGen = fibonacciGenerator();
console.log(fibGen.next().value); // 0
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 1
console.log(fibGen.next().value); // 2
console.log(fibGen.next().value); // 3
console.log(fibGen.next().value); // 5
console.log(fibGen.next().value); // 8
console.log(fibGen.next().value); // 13
console.log(fibGen.next().value); // 21
console.log(fibGen.next().value); // 34
```

---

## How It Works

1. **Generator Function**: The `fibonacciGenerator` uses the `function*` syntax to define a generator.
2. **Initialization**: The first two numbers of the sequence, 0 and 1, are yielded manually.
3. **Infinite Sequence**: After the initial values, the generator enters an infinite loop to calculate and yield the next Fibonacci number.

---

## How to Use

1. Copy the code into a JavaScript file, e.g., `fibonacciGenerator.js`.
2. Run the file in a JavaScript runtime environment (e.g., Node.js).
3. Use the `next()` method of the generator to retrieve the next number in the Fibonacci sequence.

---

## Example Usage

```javascript
const fibGen = fibonacciGenerator();
console.log(fibGen.next().value); // Outputs: 0
console.log(fibGen.next().value); // Outputs: 1
console.log(fibGen.next().value); // Outputs: 1
console.log(fibGen.next().value); // Outputs: 2
console.log(fibGen.next().value); // Outputs: 3
console.log(fibGen.next().value); // Outputs: 5
console.log(fibGen.next().value); // Outputs: 8
```

---

## Features

- **Efficient Calculation**: Computes Fibonacci numbers on demand without precomputing or storing the entire sequence.
- **Infinite Sequence**: The generator can continue indefinitely, producing Fibonacci numbers as needed.

---

## Output

For example:

```javascript
0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...
```
