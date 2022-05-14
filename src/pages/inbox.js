import { Class, classList, textBook } from "./classes";
import { content, inboxContainer, submitNewClass } from "../displayController";

const init = function () {
  content.appendChild(inboxContainer);
  const header = document.createElement("h1");
  header.className = "inbox-title";
  header.textContent = "Inbox";
  content.appendChild(header);
  inboxDisplay();
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
    className.textContent = `Class: ${value.name}`;
    newCard.appendChild(className);
    //TEXTBOOK NAME
    const classTextbook = document.createElement("h3");
    classTextbook.className = "textbook-name textbook-title-name";
    classTextbook.textContent = `Textbook: ${value.textbook}`;
    newCard.appendChild(classTextbook);
    //
    inboxContainer.appendChild(newCard);
  });
};

const removeFromArray = function (item, array) {
  array.splice(1, item);
};

const editText = function (item) {
  //Add event listener
  item.addEventListener("click", function (e) {
    //Click a piece of dialog
    const original = e.target;
    console.log(item);
    console.log(item.textContent);
    //dialog element changes to input box. Text content same. save button and cancel button added.
    const editBox = document.createElement("input");
    editBox.className = "name";
    const originalClassName = item.className;
    item.className = "disappear";

    item.replaceWith(editBox);

    //if save then target.value = input box.value
    // if not then change back to original.
    editBox.addEventListener("keyup", function (e) {
      if (e.key == "Enter") {
        item.textContent = editBox.value;
        editBox.replaceWith(item);
        item.className = originalClassName;
      }
    });
  });
};

export { init, inboxDisplay, editText };
