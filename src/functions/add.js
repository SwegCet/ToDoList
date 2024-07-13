import { clearContent } from "..";
import closeIcon from '../svgs/close.svg';
import '../style.css';


export function createFormTasks() {
    const content = document.querySelector('#content');

    //create the DOM for the form.

    const form = document.createElement('form');
    form.className = 'create-new';

    //the header for the form
    const createNewHeader = document.createElement('div');
    createNewHeader.className = 'create-new-header';

    const createTitle = document.createElement('h2');
    createTitle.className = 'create-new-title';
    createTitle.textContent = 'Create a New...'

    const createClose = document.createElement('div');
    createClose.className = 'create-new-close';

    const xIcon = document.createElement('img');
    xIcon.className = 'closeIconButton';
    xIcon.src = closeIcon;

    //the sidebar for the form
    const createNewContent = document.createElement('div');
    createNewContent.className = 'create-new-content';

    const sidebar = document.createElement('div');
    sidebar.className = 'create-new-sidebar';

    const sidebarOptions = document.createElement('div');
    sidebarOptions.className = 'create-new-options';

    const toDoList = document.createElement('li');
    toDoList.setAttribute('id', 'new-todo-link');
    toDoList.textContent = 'To Do';

    const projectList = document.createElement('li');
    projectList.setAttribute('id', 'new-todo-projects')
    projectList.textContent = 'Project';

    //the input section for the form
    const newEntry = document.createElement('div'); // this is the parent of everything else below it
    newEntry.className = 'create-new-entry';
    newEntry.setAttribute('id', 'new-todo-menu');

    //text input section
    const titleInput = document.createElement('textarea');
    titleInput.className = 'create-new-input';
    titleInput.setAttribute('id', 'new-todo-title');
    titleInput.placeholder = 'Title: '
    titleInput.setAttribute('required', 'required');

    const detailInput = document.createElement('textarea');
    detailInput.className = 'create-new-input-big';
    detailInput.setAttribute('id', 'new-todo-titles');
    detailInput.placeholder = 'Details: '
    detailInput.setAttribute('required', 'required');

    //date section
    const dateContainer = document.createElement('div');
    dateContainer.className = 'create-new-date';

    const dateTitle = document.createElement('div');
    dateTitle.className = 'create-new-date-title';
    dateTitle.textContent = 'Due Date: ';

    const dateInput = document.createElement('input');
    dateInput.setAttribute('type', 'date');
    dateInput.className = 'create-new-input';
    dateInput.setAttribute('id', 'new-todo-date');
    dateInput.setAttribute('required', 'required');


    //Priority/ Submit Button section
    const prioritySubmitContainer = document.createElement('div');
    prioritySubmitContainer.className = 'create-new-priority-wrapper-submit';

    const priorityContainer = document.createElement('div');
    priorityContainer.className = 'create-new-priority';

    const priorityContainerTitle = document.createElement('div');
    priorityContainerTitle.className = "create-new-priority-title";
    priorityContainerTitle.textContent = 'Priority: ';

    const priorityLow = document.createElement('label');
    priorityLow.className = 'create-new-low';
    priorityLow.textContent = 'Low';
    const priorityLowInput = document.createElement('input');
    priorityLowInput.setAttribute('type', 'radio');
    priorityLowInput.setAttribute('id', 'create-new-low');
    priorityLowInput.setAttribute('name', 'option');

    //checks if the buttons work
    priorityLow.addEventListener('click', () => {
        console.log('low was clicked');
    })

    const priorityMed = document.createElement('label');
    priorityMed.className = 'create-new-medium';
    priorityMed.textContent = 'Medium';
    const priorityMedInput = document.createElement('input');
    priorityMedInput.setAttribute('type', 'radio');
    priorityMedInput.setAttribute('id', 'create-new-medium');
    priorityMedInput.setAttribute('name', 'option');

    //checks if the buttons work
    priorityMed.addEventListener('click', () => {
        console.log('medium was clicked');
    })

    const priorityHigh = document.createElement('label');
    priorityHigh.className = 'create-new-high';
    priorityHigh.textContent = 'High';
    const priorityHighInput = document.createElement('input');
    priorityHighInput.setAttribute('type', 'radio');
    priorityHighInput.setAttribute('id', 'create-new-high');
    priorityHighInput.setAttribute('name', 'option');

    //checks if the buttons work
    priorityHigh.addEventListener('click', () => {
        console.log('high was clicked');
    })

    const submitButton = document.createElement('input');
    submitButton.setAttribute('type', 'submit');
    submitButton.setAttribute('id', 'todo-submit');
    submitButton.setAttribute('value', 'Add To Do');
    submitButton.className = 'create-new-todo-submit';

    //append everything

    //Input append
    priorityLow.appendChild(priorityLowInput);
    priorityMed.appendChild(priorityMedInput);
    priorityHigh.appendChild(priorityHighInput);

    priorityContainer.appendChild(priorityContainerTitle);

    priorityContainer.appendChild(priorityLow);
    priorityContainer.appendChild(priorityMed);
    priorityContainer.appendChild(priorityHigh);

    prioritySubmitContainer.appendChild(priorityContainer);
    prioritySubmitContainer.appendChild(submitButton);
    //date
    dateContainer.appendChild(dateTitle);
    dateContainer.appendChild(dateInput);
    //prioritysubmitcontainer & input append into newEntry
    newEntry.appendChild(titleInput);
    newEntry.appendChild(detailInput);
    newEntry.appendChild(dateContainer);
    newEntry.appendChild(prioritySubmitContainer);

    //Sidebar append 
    sidebarOptions.appendChild(toDoList);
    sidebarOptions.appendChild(projectList);
    sidebar.appendChild(sidebarOptions);
    createNewContent.appendChild(sidebar);
    createNewContent.appendChild(newEntry)
    //Header append
    createClose.appendChild(xIcon);
    createNewHeader.appendChild(createTitle);
    createNewHeader.appendChild(createClose);

    //WHOLE FORM APPEND
    form.appendChild(createNewHeader);
    form.appendChild(createNewContent);

    content.appendChild(form);

    //Changes back to Task Tab
    const addToDo = document.querySelector('#new-todo-link');
    addToDo.addEventListener('click', () => {
        clearContent();
        createFormTasks();
        console.log('ToDo was clicked');
    })

    //Changes form to Projects Tab
    const addProjects = document.querySelector('#new-todo-projects')
    addProjects.addEventListener('click', () => {
        clearContent();
        addProject();
        console.log('Projects was clicked');
    });

    //if close button was clicked, close the form
    const closeButton = document.querySelector('.closeIconButton');

    closeButton.addEventListener('click', () => {
        clearContent();
        console.log('Close button was clicked');
    });

}

export function addProject() {
    const content = document.querySelector('#content');

    // Practically the same form but just title input
    const form = document.createElement('form');
    form.className = 'create-new';

    //the header for the form
    const createNewHeader = document.createElement('div');
    createNewHeader.className = 'create-new-header';

    const createTitle = document.createElement('h2');
    createTitle.className = 'create-new-title';
    createTitle.textContent = 'Create a New...'

    const createClose = document.createElement('div');
    createClose.className = 'create-new-close';

    const xIcon = document.createElement('img');
    xIcon.className = 'closeIconButton';
    xIcon.src = closeIcon;

    //the sidebar for the form
    const createNewContent = document.createElement('div');
    createNewContent.className = 'create-new-content';

    const sidebar = document.createElement('div');
    sidebar.className = 'create-new-sidebar';

    const sidebarOptions = document.createElement('div');
    sidebarOptions.className = 'create-new-options';

    const toDoList = document.createElement('li');
    toDoList.setAttribute('id', 'new-todo-link');
    toDoList.textContent = 'To Do';

    const projectList = document.createElement('li');
    projectList.setAttribute('id', 'new-todo-projects')
    projectList.textContent = 'Project';

    //Input Section Should be just the title input and submit button
    const newEntry = document.createElement('div'); // this is the parent of everything else below it
    newEntry.className = 'create-new-entry';
    newEntry.setAttribute('id', 'new-todo-menu');

    //text input section
    const titleInput = document.createElement('textarea');
    titleInput.className = 'create-new-input';
    titleInput.setAttribute('id', 'new-todo-title');
    titleInput.placeholder = 'Create New Project :'
    titleInput.setAttribute('required', 'required');

    //Button
    const projectContainer = document.createElement('div');
    projectContainer.setAttribute('id', 'create-new-project-container')
    projectContainer.className = 'project-container';

    const createProjectButton = document.createElement('input');
    createProjectButton.setAttribute('type', 'submit');
    createProjectButton.setAttribute('id', 'project-submit');
    createProjectButton.setAttribute('value', 'Create Project');
    createProjectButton.className = 'create-new-project-submit';

    projectContainer.appendChild(createProjectButton);

    //Append Child - Input Section
    newEntry.appendChild(titleInput);
    newEntry.appendChild(projectContainer);

    //Sidebar Section
    sidebarOptions.appendChild(toDoList);
    sidebarOptions.appendChild(projectList);
    sidebar.appendChild(sidebarOptions);
    createNewContent.appendChild(sidebar);
    createNewContent.appendChild(newEntry)

    //Header append
    createClose.appendChild(xIcon);
    createNewHeader.appendChild(createTitle);
    createNewHeader.appendChild(createClose);

    //WHOLE FORM APPEND
    form.appendChild(createNewHeader);
    form.appendChild(createNewContent);

    content.appendChild(form);

    //Changes back to Task Tab
    const addToDo = document.querySelector('#new-todo-link');
    addToDo.addEventListener('click', () => {
        clearContent();
        createFormTasks();
        console.log('ToDo was clicked');
    })

    //Changes form to Projects Tab
    const addProjects = document.querySelector('#new-todo-projects')
    addProjects.addEventListener('click', () => {
        clearContent();
        addProject();
        console.log('Projects was clicked');
    });

    //if close button was clicked, close the form
    const closeButton = document.querySelector('.closeIconButton');

    closeButton.addEventListener('click', () => {
        clearContent();
        console.log('Close button was clicked');
    });
}