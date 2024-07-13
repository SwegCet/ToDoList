import ToDoTask from './task';
import { toDoList } from './task';
import { createFormTasks } from './add';
import { addProject } from './add';
import { clearContent } from '..';
import '../style.css';


//ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    window.handleSubmit = handleSubmit;
});

// Function to get form data
function getFormData() {
    const title = document.querySelector('#new-todo-title').value;
    const details = document.querySelector('#new-todo-titles').value;
    const date = document.querySelector('#new-todo-date').value;
    const priority = document.querySelector('input[name="option"]:checked').value;

    return { title, details, date, priority };
}
export function handleSubmit(event) {
    event.preventDefault();

    const formData = getFormData();

    const newTask = new ToDoTask(formData);

    addTaskList(newTask);

    let taskList = new toDoList();

    taskList.addTask(newTask);
}


function addTaskList(task) {
    console.log(`Title : ${task.title}`);
    console.log(`Detail : ${task.detail}`);
    console.log(`Date : ${task.date}`);
    console.log(`Priority : ${task.priority}`);
}
//ensures handlesubmit is globally accessible
document.addEventListener('DOMContentLoaded', function () {
    window.handleSubmit = handleSubmit;
});