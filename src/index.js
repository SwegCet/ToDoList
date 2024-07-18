import { createFormTasks, renderProject, renderTask } from './functions/add';
import { displayProject, displayTask, filterTasks } from './functions/UI';
import './style.css'
//this file should contain importing from the function.js to just load up the html

const addButton = document.querySelector('.add');

const taskContainer = document.querySelector('.task-container');

const navHome = document.querySelector('#nav-home');

//Initalize List of Projects and Tasks as page is loaded
document.addEventListener('DOMContentLoaded', () => {
    //Call Functions
    displayTask();
    displayProject();
});


//clear taskContainer function
export function cleartaskContainer() {
    taskContainer.textContent = '';
}

//Pop up the form
addButton.addEventListener('click', () => {
    createFormTasks();
});

navHome.addEventListener('click', () => {
    displayTask();
})

//add event listener click
document.addEventListener('DOMContentLoaded', () => {
    let projectItems = document.querySelectorAll('.project-title');
    projectItems.forEach(item => {
        item.addEventListener('click', (event) => {
            let selectedProject = event.currentTarget.getAttribute('value');
            filterTasks(selectedProject);
            console.log(`Clicked Value = ${selectedProject}`);
        })
    })
})

