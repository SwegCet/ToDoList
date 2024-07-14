import ToDoTask from './task';
import { ToDoList } from './task';
import { addProject } from './add';
import { displayTask } from './add';
import { clearContent } from '..';
import '../style.css';

//global variable
let taskList = new ToDoList();

//ensure the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    window.handleSubmit = handleSubmit;
});

export function handleSubmit(event) {
    event.preventDefault();

    const title = document.querySelector('#new-todo-title').value;
    const detail = document.querySelector('#new-todo-titles').value;
    const date = document.querySelector('#new-todo-date').value;
    const priority = document.querySelector('input[name="option"]:checked').value;

    const newTask = new ToDoTask(title, detail, date, priority);

    addTaskList(newTask);

    //taskList.addTask(newTask);
    updateTodoList();

    const form = document.querySelector('.create-new');
    form.remove();

    displayTask(newTask);

    console.log(taskList);
}


function addTaskList(task) {
    console.log(`Title : ${task.title}`);
    console.log(`Detail : ${task.detail}`);
    console.log(`Date : ${task.date}`);
    console.log(`Priority : ${task.priority}`);
}

function getTodoList() {
    const todoList = localStorage.getItem("task");

}

function updateTodoList(task) {
    localStorage.setItem("task", taskList(newTask));

    getTodoList();
}