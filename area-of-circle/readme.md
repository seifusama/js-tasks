
# Calculate Area of a Circle

## Description

This JavaScript program calculates the area of a circle given its diameter. The result is rounded to two decimal places for better readability.

## Task Statement

Write a JavaScript program that takes the diameter of a circle as input and prints out its area.

### Example

```javascript
calcArea(5); // Outputs: 19.63
```

### Hint

Use `Math.PI` to represent the value of π (pi).

---

## Code

```javascript
function calcArea(dia) {
    dia /= 2;
    return parseFloat(dia * dia * Math.PI).toFixed(2);
}

console.log(calcArea(5)); // 19.63
```

---

## How to Run

1. Copy the code into a JavaScript file, e.g., `circleArea.js`.
2. Run the file in a JavaScript runtime environment (e.g., Node.js) or directly in the browser console.
3. Call the `calcArea(diameter)` function with your desired diameter as the argument.

---

## Explanation

1. **Halve the Diameter**: The input `dia` is divided by 2 to calculate the radius of the circle.
2. **Calculate Area**: The area is calculated using the formula:  
   \[
   \text{Area} = \pi \times \text{radius}^2
   \]
3. **Formatting**: The `toFixed(2)` method ensures the output is rounded to two decimal places.

---

## Output

For example:

```javascript
calcArea(5); // 19.63
calcArea(10); // 78.54
```
