import ToDoTask from './task';
import { Project } from './task';
import { renderTask, renderProject } from './add';
import '../style.css';

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

    //clears current task container if exists
    const taskContainer = document.querySelector('.task-container');
    taskContainer.textContent = '';

    //renders container
    taskList.forEach(renderTask);
}

//remove function
export function removeTask(taskId) {
    //Gets Todo List
    let taskList = getTodoList();

    //filters based off ID matches
    taskList = taskList.filter(task => task.id !== taskId); //Filters out task that matches


    //update localStorage
    localStorage.setItem('taskList', JSON.stringify(taskList));

    //updates the render
    displayTask();
}

export function handleProjectSubmit(event) {
    event.preventDefault();

    const title = document.querySelector('#new-project-title').value;

    const newProject = new Project(title);

    //call getProjectList
    getProjectList();

    //call updateProjectList
    updateProjectList(newProject);

    console.log(getProjectList);
    const form = document.querySelector('.create-new');
    form.remove();

    displayProject();
}

function getProjectList() {
    //Get Project List
    let projectList = JSON.parse(localStorage.getItem('projectList') ?? '[]');

    return projectList
}

//Update projectList
function updateProjectList(project) {
    //Get Project List
    const projectList = getProjectList();

    //pushes project into array
    projectList.push(project);

    //update project array
    localStorage.setItem('projectList', JSON.stringify(projectList));
}

function displayProject() {
    const projectList = JSON.parse(localStorage.getItem('projectList'));

    //clear current current project container
    const projectContainer = document.querySelector('.projects');
    projectContainer.textContent = '';

    projectList.forEach(renderProject);
}