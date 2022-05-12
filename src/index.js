import { format } from "date-fns";
import { toArray } from "lodash";
import { app, index, content } from "./displayController";
import "./styles.css";
import { toDoItem, lessons, classes } from "./todo.js";
import {
  Student,
  studentList,
  listMaker,
  addStudent,
  attendanceDisplay,
} from "./pages/Attendance";

const a = new Student("a");
const b = new Student("b");
const c = new Student("c");
const d = new Student("d");
studentList.push(a, b, c, d);
console.log(studentList);

attendanceDisplay();
