
# Filter Array Elements Using Regular Expressions

## Description

This project implements a function that filters an array of strings to match elements that:

1. Start with "hand" (case insensitive).
2. End with either "s", "y", or "le".
3. May contain additional characters in between.

---

## Task Statement

Write a function that takes an array of strings and filters the elements based on the criteria above using regular expressions.

### Example

**Input**:

```javascript
['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY']
```

**Output**:

```javascript
['hands', 'hanDLes', 'HANDINGLY']
```

**Tip**: Use Regular Expressions (`RegExp`) to solve the task.

---

## Code

```javascript
const pattern = /^(hand)(\w*)(s|y|le)$/gmi;

let input = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
let output = [];
input.forEach((i) => {
    if (pattern.test(i)) {
        output.push(i);
    }
});
console.log(output); // ['hands', 'hanDLes', 'HANDINGLY']
```

---

## How It Works

1. **Regular Expression Pattern**:
   - `^hand`: Matches strings starting with "hand" (case insensitive).
   - `(\w*)`: Allows zero or more alphanumeric characters in between.
   - `(s|y|le)$`: Matches strings ending with "s", "y", or "le".
   - `gmi`: Global, multiline, and case-insensitive modifiers.

2. **Filtering Process**:
   - Iterate through the input array using `forEach`.
   - Apply the `test()` method of the regular expression to check if the element matches the pattern.
   - If a match is found, add the element to the `output` array.

---

## How to Use

1. Copy the code into a JavaScript file, e.g., `filterArray.js`.
2. Run the file in a JavaScript runtime environment (e.g., Node.js).
3. Modify the `input` array to test with different sets of strings.

---

## Example Usage

```javascript
const pattern = /^(hand)(\w*)(s|y|le)$/gmi;

let input = ['handOn', 'hands', 'hanDLes', 'Handcuffs', 'handmade', 'in-hands', 'HANDINGLY'];
let output = [];
input.forEach((i) => {
    if (pattern.test(i)) {
        output.push(i);
    }
});
console.log(output); // Outputs: ['hands', 'hanDLes', 'HANDINGLY']
```

---

## Features

- **Flexible Matching**: Handles a variety of cases where the string starts with "hand" and ends with specific patterns.
- **Case Insensitivity**: Matches are not affected by letter casing.

---

## Output

For example:

```javascript
['hands', 'hanDLes', 'HANDINGLY']
```
