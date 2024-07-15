import ToDoTask from './task';
import { ToDoList } from './task';
import { addProject, domTask } from './add';
import { domCreateTaskCard } from './add';
import { clearContent } from '..';
import '../style.css';

//global variable
//let taskList = new ToDoList();

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


    //call getTodoList
    getTodoList();

    //Update todoList
    updateTodoList(newTask);

    console.log(getTodoList());
    const form = document.querySelector('.create-new');
    form.remove();

    displayTask();
}

function getTodoList() {
    //get todoList if it doesn't exist it creates an empty array
    //parse the array
    let todoList = JSON.parse(localStorage.getItem('taskList') ?? '[]');

    //sort by date?
    todoList.sort((a, b) => {
        let dateA = new Date(a.date);
        let dateB = new Date(b.date);

        return dateA - dateB;
    });

    return todoList
}

//Function to update the todoList
function updateTodoList(task) {
    //get todoList
    const taskList = getTodoList();

    //pushes task into array
    taskList.push(task);

    //updates array
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

//display function
function displayTask() {
    //Get taskList from local storage
    const taskList = JSON.parse(localStorage.getItem('taskList'));

    //renders container
    taskList.forEach(domCreateTaskCard);
}