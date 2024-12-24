# Student Class Implementation

## Description

This program defines a TypeScript class `Student` that implements the `WakesUpEarly` interface. The `WakesUpEarly` interface contains a method `wakeUpEarly()` which returns a string describing how the student wakes up early.

---

## Features

- **Interface Implementation**: The `Student` class implements the `WakesUpEarly` interface with a method that describes how the student wakes up early.
- **Class Properties**: The class `Student` includes properties such as first name, last name, and grade, and uses them in the `wakeUpEarly()` method.

---

## Example

### Code

```typescript
interface WakesUpEarly {
    wakeUpEarly(): string;
}

class Student implements WakesUpEarly {
    constructor(
        private firstName: string,
        private lastName: string,
        private grade: number) {};

    wakeUpEarly(): string {
        return `${this.firstName} ${this.lastName} wakes up early today`;
    }
}

let me = new Student("John", "Doe", 100);
console.log(me.wakeUpEarly());
```

### Output

```
John Doe wakes up early today
```

---

## Requirements

- Node.js installed on your machine.
- TypeScript installed (`npm install -g typescript`).

---

## Usage

1. Save the code to a file, e.g., `student.ts`.
2. Compile the TypeScript code to JavaScript:

   ```bash
   tsc student.ts
   ```

3. Run the compiled JavaScript file:

   ```bash
   node student.js
   ```

---

## Code Explanation

- **Interface `WakesUpEarly`**: The interface contains a method `wakeUpEarly()`, which must be implemented by any class that implements the interface. In this case, it returns a string describing the student's habit of waking up early.
  
- **Class `Student`**:
  - The `Student` class implements the `WakesUpEarly` interface by providing its own implementation of the `wakeUpEarly()` method.
  - The class has three properties: `firstName`, `lastName`, and `grade`. These properties are set via the constructor and used in the `wakeUpEarly()` method to form the descriptive string.

- **Creating an Instance**: An instance of the `Student` class is created with the name `John Doe` and grade `100`, and the `wakeUpEarly()` method is called to log the string.

---

## Notes

- The `wakeUpEarly()` method can be further customized to give different descriptions based on the student's habits or preferences, such as setting an alarm clock or being a natural early riser.

---
