///All Things related to attendace
import { content } from "../displayController";
class Student {
  constructor(name) {
    this.name = name;
  }
}
const studentList = [];

const listMaker = function () {
  const div = document.createElement("div");
  div.textContent = studentList;
  content.appendChild(div);
};

const addStudent = function (student) {
  studentList.push(student);
};

const attendanceDisplay = function () {
  studentList.forEach((value) => {
    const newLine = document.createElement("p");
    newLine.textContent = value.name;
    content.appendChild(newLine);
  });
};

export { Student, studentList, listMaker, addStudent, attendanceDisplay };
