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
  updatedTask: function (obj) {
    const { id, ...newObj } = obj;
    const task = this.checkElement(id);
    if (!task) {
      console.log(`элемента с  id =${id} нет!`);
      return;
    }
    Object.assign(task, newObj);
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
  title: "сходить погулять с собакой",
  id: 3,
  priority: 5,
};
let task4 = {
  title: "Сделать уроки",
  id: 4,
  // desctiprion: "нужно сделать математику и английский",
  priority: 5,
};
toDoList.addTasks(task1);
toDoList.addTasks(task2);
toDoList.addTasks(task3);

newTasks = {
  tasks: [],
  checkElement: function (id) {
    return this.tasks.find((f) => f.id === id);
  },
};

const newTasksAddFu = toDoList.addTasks.bind(newTasks);
const newTasksUpdateFu = toDoList.updatedTask.bind(newTasks);
const newTasksDeleteFu = toDoList.deleteTask.bind(newTasks);
const newTasksSortFu = toDoList.sortingId.bind(newTasks);
const newTasksSortPriorityFu = toDoList.sortingPriority.bind(newTasks);

newTasksAddFu(task4);
console.log(newTasks.tasks);
const newInfo = {
  id: 4,
  title: "погулять с собакой",
  desctiprion: "пофиг на уроки,надо погулят с собакой",
  priority: 6,
};
newTasksUpdateFu(newInfo);
console.log(newTasks.tasks);
