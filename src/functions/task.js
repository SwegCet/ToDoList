//here we define task class
export default class toDoTask {
    constructor(title, detail, date, priority) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
}

export class toDoList {
    constructor() {
        this.tasks = []
    }

    addTask(task) {
        this.tasks.push(task);
    }
}

