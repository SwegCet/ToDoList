//here we define task class
export default class ToDoTask {
    constructor(title, detail, date, priority) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
}

export class ToDoList {
    constructor() {
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

