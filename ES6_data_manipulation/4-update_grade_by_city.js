export default function updateStudentGradeByCity(students, city, newGrades) {
  const filteredStudents = students.filter(student => student.location === city);
  const studentsUpdated = filteredStudents.map(student => {
    const matchingGrade = newGrades.find(grade => grade.studentId === student.id);

    if (matchingGrade) {
      student.grade = matchingGrade.grade;
    } else {
      student.grade = "N/A";
    }

    return student;
  });
}
