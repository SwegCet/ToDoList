//here we define task class
export default class ToDoTask {
    constructor(title, detail, date, priority) {
        this.id = Date.now();
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
    }
}

export function Project(title) {
    this.title = title;
}