import toDoTask from './task';
import './style.css';

//class for listing tasks
export default class listTask {
    constructor(name) {
        this.name = name;
        this.projects = [];
    }
    //add project
    addProject(project) {
        this.projects.push(project);
    }

}

//we want to clear the content
function removeContent() {
    const content = document.querySelector('#content');
    content.textContent = '';
}