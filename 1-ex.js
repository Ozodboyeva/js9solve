const students = [
  { name: "Quincy", percent: 96 },
  { name: "Jason", percent: 84 },
  { name: "Alexis", percent: 100 },
  { name: "Sam", percent: 65 },
  { name: "Katie", percent: 90 },
  { name: "Anna", percent: 75 },
];

function getNamesWithGrade(grade) {
  const gradeRange = {
    5: { min: 85, max: 100 },
    4: { min: 70, max: 84 },
    3: { min: 60, max: 69 },
  };

  return students
    .filter((student) => {
      const studentGrade = Object.keys(gradeRange).find(
        (key) =>
          student.percent >= gradeRange[key].min &&
          student.percent <= gradeRange[key].max
      );
      return studentGrade == grade;
    })
    .map((student) => student.name);
}

console.log(getNamesWithGrade(5));
