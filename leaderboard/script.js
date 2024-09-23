const getLeaderBoard = (students) => {
    return students
    .map(student => {
        return {
            ...student,
            totalGrades : student.grades.math + student.grades.physics + student.grades.programming + student.grades.english
        };
    })
    .filter(student => (student.totalGrades>=85))
    .sort((a,b) => b.totalGrades - a.totalGrades);
    return leaderboard;
  }
  
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
  ]
  
  console.log(getLeaderBoard(students));