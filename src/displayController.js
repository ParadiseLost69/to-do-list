import { Class } from "./pages/classes";
import { inboxDisplay } from "./pages/inbox";
import { indexList } from "./pages/inbox";
//This module contains all information for transforming the DOM
const app = document.querySelector("#app");
const inbox = document.querySelector(".inbox-h1");
const content = document.querySelector(".content");
const inboxContainer = document.createElement("div");
inboxContainer.className = "inbox-container";
const navClasses = document.querySelector(".classes-h1");

//Modals
//Add Class Modal
const newClassModal = document.querySelector(".new-class-modal");
const newClassButton = document.querySelector(".new-class-button");
const exitButton1 = document.querySelector(".exit-button");
const classSubmitBtn = document.querySelector(".class-submit");

//Class Modal Values
const classNameInput = document.querySelector(".class-name");
const textbookNameInput = document.querySelector(".textbook-name");

const displayClassModal = function (button, modal, x) {
  button.addEventListener("click", function () {
    modal.style.display = "block";
  });
  x.addEventListener("click", function () {
    modal.style.display = "none";
  });
  document.addEventListener("keyup", function (event) {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
};
//This function creates a new class, pushes it to classList, and displays the array
//ISSUES - adds empty array items
//Is SUPER bloated - REFACTOR LATER
const submitNewClass = function (classList) {
  classSubmitBtn.addEventListener("click", function () {
    const newClass = new Class(classNameInput.value, textbookNameInput.value);
    classList.push(newClass);
    console.log(classList);
    classNameInput.value = "";
    textbookNameInput.value = "";
    console.log(indexList);
    if (!inboxContainer.hasChildNodes()) {
      inboxDisplay();
    } else {
      const classes = document.querySelectorAll(".class-card");
      classes.forEach(function (value) {
        inboxContainer.removeChild(value);
      });

      inboxDisplay();
    }
  });
};

const removeFromDOM = function (element, parent) {
  parent.remove(element);
};

export {
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
  navClasses,
  displayClassModal,
  submitNewClass,
};
