export default function getListStudents() {
  const studentList = [];

  const studentA = {
    id: 1,
    firstName: 'Guillaume',
    location: 'San Francisco',
  };
  studentList.push(studentA);

  const studentB = {
    id: 2,
    firstName: 'James',
    location: 'Columbia',
  };
  studentList.push(studentB);

  const studentC = {
    id: 5,
    firstName: 'Serena',
    location: 'San Francisco',
  };
  studentList.push(studentC);
  return studentList;
}
