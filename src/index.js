import { format } from "date-fns";
import { toArray } from "lodash";
import {
  app,
  inbox,
  content,
  newClassModal,
  newClassButton,
  exitButton1,
  classSubmitBtn,
  classNameInput,
  textbookNameInput,
  inboxContainer,
  displayClassModal,
  submitNewClass,
} from "./displayController";
import "./styles.css";
import { toDoItem, lessons, classes } from "./todo.js";
import {
  Student,
  studentList,
  listMaker,
  addStudent,
  attendanceDisplay,
} from "./pages/Attendance";
import { Class, textbook, classList } from "./pages/classes";
import { inboxDisplay, init } from "./pages/inbox";
init();
displayClassModal(newClassButton, newClassModal, exitButton1);
submitNewClass(classList);
