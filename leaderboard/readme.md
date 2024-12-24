
# Student Leaderboard

## Description

This project implements a `getLeaderBoard` function that helps filter and rank students based on their total grades. The leaderboard includes only top students who meet the minimum grade criteria and is sorted in descending order of their total grades.

---

## Task Statement

Mister Hamed needs to prepare a leaderboard for his students. The students' data is stored as an array of objects, each containing:

- The student's `name`
- Their `class`
- A `grades` object with scores for the following subjects:
  - `math`
  - `physics`
  - `programming`
  - `english`

**Objective**:

1. Filter students who have a total grade of 85 or more.
2. Add a new property `totalGrade` to each student object in the filtered list, representing the sum of their grades.
3. Sort the leaderboard in descending order of `totalGrade`.
4. Ensure the original students array remains unchanged (pure function).

---

## Code

```javascript
const getLeaderBoard = (students) => {
    return students
    .map(student => {
        return {
            ...student,
            totalGrades : student.grades.math + student.grades.physics + student.grades.programming + student.grades.english
        };
    })
    .filter(student => (student.totalGrades >= 85))
    .sort((a, b) => b.totalGrades - a.totalGrades);
};

const students = [
    {
        name: '3bkreem',
        class: '3rd',
        grades: {
            math: 25,
            physics: 25,
            programming: 25,
            english: 25
        }
    },
    {
        name: 'Samer',
        class: '3rd',
        grades: {
            math: 10,
            physics: 15,
            programming: 12,
            english: 19
        }
    },
    {
        name: 'Ahmed',
        class: '3rd',
        grades: {
            math: 20,
            physics: 20,
            programming: 20,
            english: 20
        }
    },
    {
        name: 'Ali',
        class: '3rd',
        grades: {
            math: 20,
            physics: 25,
            programming: 19,
            english: 22
        }
    },
    {
        name: 'Elgoker',
        class: '3rd',
        grades: {
            math: 23,
            physics: 25,
            programming: 19,
            english: 22
        }
    }
];

console.log(getLeaderBoard(students));
```

---

## How It Works

1. **Map**:
   - A new array is created where each student object is enhanced with a new property `totalGrades`, which is the sum of the grades for all subjects.

2. **Filter**:
   - The mapped array is filtered to include only students with a `totalGrades` value of 85 or more.

3. **Sort**:
   - The filtered array is sorted in descending order of `totalGrades`.

4. **Pure Function**:
   - The `getLeaderBoard` function does not modify the original `students` array; it works on a copy.

---

## How to Use

1. Copy the code into a JavaScript file, e.g., `leaderboard.js`.
2. Run the file in a JavaScript runtime environment (e.g., Node.js).
3. Modify the `students` array to test with different data.

---

## Example Usage

```javascript
const students = [
    {
        name: '3bkreem',
        class: '3rd',
        grades: {
            math: 25,
            physics: 25,
            programming: 25,
            english: 25
        }
    },
    {
        name: 'Samer',
        class: '3rd',
        grades: {
            math: 10,
            physics: 15,
            programming: 12,
            english: 19
        }
    }
];

console.log(getLeaderBoard(students));
// Output: [{ name: '3bkreem', class: '3rd', grades: {...}, totalGrades: 100 }]
```

---

## Features

- **Dynamic Filtering**: Automatically filters out students who don’t meet the grade criteria.
- **Sorting**: Displays the leaderboard in descending order by total grades.
- **Non-Mutative**: The original array remains untouched.

---

## Output

For example:

```javascript
[
  {
    name: '3bkreem',
    class: '3rd',
    grades: {...},
    totalGrades: 100
  },
  {
    name: 'Elgoker',
    class: '3rd',
    grades: {...},
    totalGrades: 89
  }
]
```
