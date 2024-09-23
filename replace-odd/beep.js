function replaceOddNumbers(str) {
    return str.replace(/(\d*[13579])\b/g, 'BEEP');
}

// Example usage
let input = "I have 12 cars, 11 of which are 89 years old";
let output = replaceOddNumbers(input);
console.log(output);
