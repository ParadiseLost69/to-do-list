import { Class, classList, textBook } from "./classes";
import { content, inboxContainer } from "../displayController";

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
    //
    const className = document.createElement("h2");
    className.className = `class-name class-title-name`;
    className.textContent = `Class: ${value.name}`;
    newCard.appendChild(className);
    //
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

export { init, inboxDisplay };
