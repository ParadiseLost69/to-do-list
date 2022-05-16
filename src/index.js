import { format } from "date-fns";
import { toArray } from "lodash";
import {
  app,
  inbox,
  inboxTitle,
  content,
  newClassModal,
  newClassButton,
  exitButton1,
  classSubmitBtn,
  classNameInput,
  textbookNameInput,
  inboxContainer,
  navClasses,
  displayClassModal,
  submitNewClass,
  createNewElementWithName,
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
import {
  addLessonModal,
  editText,
  inboxClear,
  inboxDisplay,
  inboxI,
  inboxInit,
} from "./pages/inbox";
inboxInit();
displayClassModal(newClassButton, newClassModal, exitButton1);
submitNewClass(classList);

const date = document.createElement("h1");
date.textContent = format(new Date(), "'Today is' MMM, dd, yyyy");
content.appendChild(date);
