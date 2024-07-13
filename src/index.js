import { createFormTasks } from './functions/add';
import './style.css'
//this file should contain importing from the function.js to just load up the html

const addButton = document.querySelector('.add');

const content = document.querySelector('#content');

//clear content function
export function clearContent() {
    content.textContent = '';
}

addButton.addEventListener('click', () => {
    createFormTasks();
});


