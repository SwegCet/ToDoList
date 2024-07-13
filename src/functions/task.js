//here we define task class
export default class toDoTask {
    constructor(title, detail, date, priority, completed = false) {
        this.title = title;
        this.detail = detail;
        this.date = date;
        this.priority = priority;
        this.completed = completed;
    }

    completedStatus() {
        return this.completed ? 'True' : 'False';
    }
}

