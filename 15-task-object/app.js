const toDoList = {
  tasks: [],
  checkElement: function (id) {
    return this.tasks.find((f) => f.id === id);
  },
  addTasks: function (task) {
    if (!this.tasks.find((f) => f.title === task.title)) {
      this.tasks.push(task);
    } else {
      console.log(`элемент с  заголовком "${task.title}" уже есть`);
      return false;
    }
  },
  deleteTask: function (id) {
    const result = this.checkElement(id);
    if (!result) {
      console.log(`элемента с  id =${id} нет!`);
      return;
    }

    this.tasks = this.tasks.filter((f) => f.id !== id);
  },
  updatedTask: function (id, property) {
    const task = this.checkElement(id);
    if (!task) {
      console.log(`элемента с  id =${id} нет!`);
      return;
    }

    if (typeof property == "number") {
      task.priority = Number(property);
    } else {
      task.title = `${property}`;
    }
  },
  sortingId: function () {
    f;
    return this.tasks.sort((a, b) => b.id - a.id);
  },
  sortingPriority: function (mode = true) {
    return mode
      ? this.tasks.sort((a, b) => b.priority - a.priority)
      : this.tasks.sort((a, b) => a.priority - b.priority);
  },
};
let task1 = {
  title: "Помыть посуду",
  id: 1,
  priority: 1,
};
let task2 = {
  title: "Помыть пол",
  id: 2,
  priority: 3,
};
let task3 = {
  title: "Сделать уроки",
  id: 3,
  priority: 5,
};
toDoList.addTasks(task1);
toDoList.addTasks(task2);
toDoList.addTasks(task3);
console.log(toDoList.tasks);
toDoList.addTasks(task3);
