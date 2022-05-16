import { Class, classList, textbook, textBook } from "./classes";
import {
  content,
  createNewElementWithName,
  inboxContainer,
  inboxTitle,
  submitNewClass,
} from "../displayController";
import { ModuleGraph } from "webpack";
import { create } from "lodash";

const inboxInit = function () {
  content.appendChild(inboxContainer);
  const header = document.createElement("h1");
  header.className = "inbox-title";
  header.textContent = "Inbox";
  content.appendChild(header);
  inboxDisplay();
};
const inboxClear = function () {
  inboxContainer.className = "disappear";
  content.remove(inboxTitle);
};

const inboxDisplay = function () {
  classList.forEach(function (value, i) {
    const newCard = document.createElement("div");
    newCard.className = `class-card ${i}`;
    //X BUTTON
    const xButton = document.createElement("p");
    xButton.className = "card-x-button";
    xButton.textContent = "X";
    xButton.addEventListener("click", function () {
      this.parentElement.className = "disappear";
      classList.splice(i, 1);
    });
    newCard.appendChild(xButton);
    //NAME
    const className = document.createElement("h2");
    className.className = `class-name class-title-name`;
    className.textContent = value.name;
    editText(className);
    newCard.appendChild(className);
    //TEXTBOOK NAME
    const classTextbook = document.createElement("h3");
    classTextbook.className = "textbook-name textbook-title-name";
    classTextbook.textContent = `Textbook: ${value.textbook}`;
    editText(classTextbook);
    newCard.appendChild(classTextbook);
    //
    inboxContainer.appendChild(newCard);
  });
};

const editText = function (item) {
  //Add event listener
  item.addEventListener("click", function (e) {
    //Click a piece of dialog and save original class
    const originalClassName = item.className;
    const originalItemValue = item.value;
    //dialog element changes to input box. Text content same.
    const editBox = createNewElementWithName("input", "edit-box");

    item.className = "disappear";
    //save button and cancel button added.
    const saveButton = createNewElementWithName("button", "edit-save-button");
    saveButton.textContent = "save";

    const cancelButton = createNewElementWithName(
      "button",
      "edit-cancel-button"
    );
    cancelButton.textContent = "cancel";

    item.replaceWith(editBox);

    //add the buttons

    editBox.parentElement.appendChild(saveButton);
    editBox.parentElement.appendChild(cancelButton);
    //if save then target.value = input box.value
    // if not then change back to original.
    saveButton.addEventListener("click", function () {
      if (editBox.value) {
        editBox.parentElement.removeChild(saveButton);
        editBox.parentElement.removeChild(cancelButton);
        item.textContent = editBox.value;
        editBox.replaceWith(item);
        item.className = originalClassName;
      } else {
        alert("Please enter a value");
      }
    });
    cancelButton.addEventListener("click", function () {
      editBox.parentElement.removeChild(saveButton);
      editBox.parentElement.removeChild(cancelButton);
      item.value = originalItemValue;
      editBox.replaceWith(item);
      item.className = originalClassName;
    });
  });
};

// const addLessonModal = function () {
//   //add new Textbook modal function.
//   // needs name, totalpage, currentpage, urgency, description
//   const modalForm = createNewElementWithName("form", "add-lesson-modal");
//   const nameInput = createNewElementWithName("input", "form-name-input");
//   const totalPagesInput = createNewElementWithName("input", "form-total-pages");
//   const currentPageInput = createNewElementWithName(
//     "input",
//     "form-current-page"
//   );
//   const urgencyInput = createNewElementWithName("input", "form-urgency");
//   const descriptionInput = createNewElementWithName(
//     "text-box",
//     "form-description"
//   );

//   modalForm.appendChild(nameInput);
//   modalForm.appendChild(totalPagesInput);
//   modalForm.appendChild(currentPageInput);
//   modalForm.appendChild(urgencyInput);
//   modalForm.appendChild(descriptionInput);
//   content.appendChild(modalForm);
// };

// const addLessonButton = function (modalName) {
//   const newButton = createNewElementWithName("button", "add-textbook");
//   newButton.textContent = "add-lesson";
//   newButton.addEventListener("click", function () {
//     modalName.style.display = "grid";

//     const currentBook = new textbook();
//   });
// };
export { inboxInit, inboxDisplay, editText, inboxClear };
