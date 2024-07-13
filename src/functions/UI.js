import ToDoTask from './task';
import { createFormTasks } from './add';
import { addProject } from './add';
import { clearContent } from '..';
import './style.css';

createFormTasks();

submitButton.addEventListener('click', () => {
    handleSubmit();
    clearContent();
    console.log('this worked');
})

// Function to get form data
function getFormData() {
    const title = document.getElementById('new-todo-title').value;
    const details = document.getElementById('new-todo-titles').value;
    const date = document.getElementById('new-todo-date').value;
    const priority = document.getElementById('input[name="option"]:checked').value;

    return { title, details, date, priority };
}
function handleSubmit() {
    const taskForm = document.querySelector('.create-new');

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();

        getFormData();

        const newTask = new ToDoTask(getFormData());

        addTaskList(newTask);
    });
}


function addTaskList(task) {
    console.log(`Title : ${task.title}`);
    console.log(`Detail : ${task.detail}`);
    console.log(`Date : ${task.date}`);
    console.log(`Priority : ${task.priority}`);

}