
function gradeScore(score) {
  if (score >= 70 && score <= 100) return 'A';
  else if (score >= 60) return 'B';
  else if (score >= 50) return 'C';
  else if (score >= 40) return 'D';
  else return 'F';
}

// Function to summarize students
function summarizeStudent(students) {
  // Use map() to create a NEW array of strings
  return students.map(student => {
    return `${student.name} scored ${student.score} — Grade: ${gradeScore(student.score)}`;
  });
}

// Test data
const classList = [
  { name: "Amara", score: 88 },
  { name: "Tobi", score: 62 },
  { name: "Chinedu", score: 45 },
  { name: "Aisha", score: 30 }
];

// Run the function
console.log(summarizeStudent(classList));