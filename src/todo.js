let classes = [];
let lessons = [];

class toDoItem {
  constructor(title, task, priority, description, dueDate) {
    this.title = title;
    this.task = task;
    this.priority = priority;
    this.description = description;
    this.dueDate = dueDate;
  }
  changeTitle(newTitle) {
    this.title = newTitle;
  }
  changeTask(newTask) {
    this.task = newTask;
  }
}

export { toDoItem, classes, lessons };
