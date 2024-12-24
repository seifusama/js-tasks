# Odd Number Replacer

## Description

Waleed suffers from Imparnumerophobia (fear of odd numbers) and needs a tool that can help him avoid odd numbers in strings. This program replaces any odd number in a given string with the word "BEEP" using regular expressions.

---

## Features

- **Odd Number Detection**: Identifies odd numbers in the given string.
- **String Replacement**: Replaces odd numbers with the word "BEEP".
- **Regex Powered**: Utilizes regular expressions for efficient and concise string processing.

---

## Example

### Input

```
"I have 12 cars, 11 of which are 89 years old"
```

### Output

```
"I have 12 cars, BEEP of which are BEEP years old"
```

---

## Requirements

- Node.js installed on your machine.

---

## Usage

1. Save the code to a file, e.g., `odd-number-replacer.js`.
2. Run the file with Node.js:

   ```bash
   node odd-number-replacer.js
   ```

3. Modify the `input` variable in the code to test different strings.

---

## Code

```javascript
function replaceOddNumbers(str) {
    return str.replace(/(\d*[13579])\b/g, 'BEEP');
}

// Example usage
let input = "I have 12 cars, 11 of which are 89 years old";
let output = replaceOddNumbers(input);
console.log(output);
```

---

## Explanation

1. **Regular Expression**: `/(\d*[13579])\b/g`
   - `\d*` matches any sequence of digits before the odd number.
   - `[13579]` matches any odd digit.
   - `\b` ensures the match occurs at a word boundary.
   - `g` flag ensures all occurrences in the string are replaced.

2. **Replacement**:
   - All matches of the pattern are replaced with the word "BEEP".

---

## Notes

- The function does not modify the original string; it returns a new string with the replacements.
- Ensure the input string has numeric values formatted correctly for accurate results.
