const classList = [];

class Class {
  constructor(name, textbook) {
    this.name = name;
    this.textbook = textbook;
  }
}
class textbook {
  constructor(name, totalPages, currentPage, urgency, description) {
    this.name = name;
    this.totalPages = totalPages;
    this.currentPage = currentPage;
    this.urgency = urgency;
    this.description = description;
  }
  completionPercent() {
    const total = Math.round((this.currentPage / this.totalPages) * 100);
    return `${total}%`;
  }
}

const newClassForm = function () {
  document.createElement;
};

export { Class, textbook, classList };
