# Swap Elements in Array

## Description

This program defines a TypeScript generic function `swapElements` that swaps two elements in an array. It is a flexible function that can work with arrays of any data type.

---

## Features

- **Generic Function**: The `swapElements` function is generic, allowing you to swap elements in arrays of any type.
- **Range Check**: The function includes a range check to ensure the indices provided are within the bounds of the array.
- **Swapping Logic**: If the indices are valid, the elements at the specified indices are swapped using array destructuring.

---

## Example

### Code

```typescript
function swapElements<T>(arr: T[], idx1: number, idx2: number) {
    if (idx1 > 0 && idx2 > 0 && idx1 < arr.length && idx2 < arr.length) {
        [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
    }
    return arr;
}

const numbers = [1, 2, 3, 4, 5];
console.log(swapElements(numbers, 1, 3));
```

### Output

```
[1, 4, 3, 2, 5]
```

---

## Code Explanation

- **Generic Function**: The function `swapElements` takes three parameters:
  - `arr`: The array of elements (of any type).
  - `idx1` and `idx2`: The indices of the elements to be swapped.
  
- **Range Check**: Before performing the swap, the function checks if the indices are within valid bounds (greater than 0 and less than the length of the array).

- **Swapping Elements**: If the indices are valid, the function uses array destructuring to swap the values of `arr[idx1]` and `arr[idx2]`.

- **Return Value**: The function returns the modified array after swapping the elements.

---

## Requirements

- Node.js installed on your machine.
- TypeScript installed (`npm install -g typescript`).

---

## Usage

1. Save the code to a file, e.g., `swap.ts`.
2. Compile the TypeScript code to JavaScript:

   ```bash
   tsc swap.ts
   ```

3. Run the compiled JavaScript file:

   ```bash
   node swap.js
   ```

---

## Notes

- The `swapElements` function works with arrays of any type due to the use of generics in TypeScript. You can pass arrays of numbers, strings, objects, or any other type of data.
- The indices provided must be valid (non-negative and within the bounds of the array) for the swap to occur.

---
