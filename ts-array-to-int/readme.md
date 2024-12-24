# Binary Array to Integer Converter

## Description

This program takes an array of ones and zeroes, interprets it as a binary number, and converts it into its equivalent integer value. The conversion ensures that only binary values (0 and 1) are allowed in the array.

---

## Features

- **Array Validation**: The input array is validated to contain only `0`s and `1`s.
- **Binary Conversion**: Converts the binary representation in the array to an integer.
- **TypeScript Support**: Written using TypeScript to ensure type safety and clarity.

---

## Example

### Input

```typescript
let array = [0, 0, 0, 1];
```

### Operations

1. Treat the array as a binary number: `0001`
2. Convert binary `0001` to decimal: `1`

### Output

```
1
```

---

## Requirements

- Node.js installed on your machine.
- TypeScript installed (`npm install -g typescript`).

---

## Usage

1. Save the code to a file, e.g., `binary-to-integer.ts`.
2. Compile the TypeScript code to JavaScript:

   ```bash
   tsc binary-to-integer.ts
   ```

3. Run the compiled JavaScript file:

   ```bash
   node binary-to-integer.js
   ```

4. Modify the `array` variable in the code to test different arrays.

---

## Notes

- The array should only contain values of `0` and `1`. If other values are present, the program throws an error.
- The function is type-safe and utilizes TypeScript for better development experience and reliability.
