const toDoList = {
  tasks: [],
  checkElement: function (id) {
    const result = this.tasks.findIndex((el) => el.id == id);
    return result != -1 ? result : false;
  },
  addTasks: function (task) {
    if (!this.checkElement(task.id)) {
      this.tasks.push(task);
    } else {
      console.log(`элемент с  id = ${task.id} уже есть`);
      return false;
    }
  },
  deleteTask: function (id) {
    const result = this.checkElement(id);
    if (result) {
      this.tasks.splice(result, 1);
    } else {
      console.log(`элемента с  id =${id} нет!`);
      return false;
    }
  },
  updatedTask: function (id, property) {
    const result = this.checkElement(id);
    if (result) {
      if (typeof property == "number") {
        this.tasks[result].priority = Number(property);
      } else {
        this.tasks[result].title = `${property}`;
      }
    } else {
      console.log(`элемента с  id =${id} нет!`);
      return false;
    }
  },
  sortingId: function () {
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
