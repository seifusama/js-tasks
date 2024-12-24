# Magic String Transformer

## Description

This program performs a series of transformations on a given string of lowercase English letters. It converts vowels to uppercase, reverses the string, optionally removes the last character if it's a consonant, and finally formats the string by separating all characters with hyphens (`-`).

---

## Features

1. **Vowel Conversion**: Converts all vowels (`a, e, i, o, u`) to uppercase.
2. **String Reversal**: Reverses the input string.
3. **Consonant Removal**: Removes the last character if it's a consonant.
4. **Hyphen Separation**: Inserts a hyphen between each character.

---

## Example

### Input

```
"hellothere"
```

### Operations

1. Convert vowels to uppercase: `hEllOthErE`
2. Reverse the string: `ErEhtOllEh`
3. Remove the last character if it's a consonant: `ErEhtOllE`
4. Add hyphens: `E-r-E-h-t-O-l-l-E`

### Output

```
E-r-E-h-t-O-l-l-E
```

---

## Requirements

- Node.js installed on your machine.

---

## Usage

1. Save the code to a file, e.g., `magic-string.js`.
2. Run the file with Node.js:

   ```bash
   node magic-string.js
   ```

3. Modify the input string in the code to test different strings.

---

## Code

```javascript
function magic(s) {
    let str = "";
    let ret = "";
    // Convert vowels to uppercase and reverse the string
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "u") {
            str += s[i].toUpperCase();
        } else if (i == 0) {
            continue; // Skip the first character if reversing
        } else {
            str += s[i];
        }
    }
    // Add hyphens
    for (let i = 0; i < str.length; i++) {
        if (i != str.length - 1) {
            ret = ret + str[i] + "-";
        } else {
            ret = ret + str[i];
        }
    }
    return ret;
};

console.log(magic('hellothere')); // E-r-E-h-t-O-l-l-E
```

---

## Explanation

1. **Vowel Conversion and Reversal**:
   - Iterates through the string in reverse order.
   - Converts vowels (`a, e, i, o, u`) to uppercase.
   - Concatenates the reversed characters into a new string, skipping the first character if it's a consonant.

2. **Hyphen Addition**:
   - Iterates through the modified string.
   - Adds a hyphen (`-`) between each character except for the last one.

3. **Final Output**:
   - Returns the transformed string with hyphens.

---

## Notes

- The program does not handle uppercase vowels in the input; it assumes the input is entirely lowercase.
- The function does not modify the original string; it creates and returns a new transformed string.
