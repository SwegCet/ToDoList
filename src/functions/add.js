import { handleSubmit, updateProjectDropdown, editTask } from "./UI";
import { handleProjectSubmit } from "./UI";
import { removeTask } from "./UI";
import trashIcon from '../svgs/trash-can-outline.svg';
import editIcon from '../svgs/file-edit-outline.svg';
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
    const dateWrapper = document.createElement('div');
    dateWrapper.className = 'create-new-date-wrapper';

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

    //add a dropdown menu for the projects folder
    const projectFolderContainer = document.createElement('div');
    projectFolderContainer.className = 'add-new-folder';

    const projectLabel = document.createElement('label')
    projectLabel.className = 'project-label';
    projectLabel.textContent = 'Project Label: ';

    const projectDropdown = document.createElement('select');
    projectDropdown.className = 'drop-menu-option';

    const projectOption = document.createElement('option');
    projectOption.className = 'default-option';
    projectOption.setAttribute('selected', 'selected')
    projectOption.setAttribute('value', 'Home');
    projectOption.textContent = 'Home';

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
    priorityLowInput.setAttribute('value', 'Low');

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
    priorityMedInput.setAttribute('value', 'Medium');

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
    priorityHighInput.setAttribute('value', 'High');

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

    projectDropdown.appendChild(projectOption);
    projectFolderContainer.appendChild(projectLabel);
    projectFolderContainer.appendChild(projectDropdown);


    dateWrapper.appendChild(dateContainer);
    dateWrapper.appendChild(projectFolderContainer);

    //prioritysubmitcontainer & input append into newEntry
    newEntry.appendChild(titleInput);
    newEntry.appendChild(detailInput);
    newEntry.appendChild(dateWrapper);
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
        form.remove();
        createFormTasks();
        console.log('ToDo was clicked');
    })

    //Changes form to Projects Tab
    const addProjects = document.querySelector('#new-todo-projects')
    addProjects.addEventListener('click', () => {
        form.remove();
        addProject();
        console.log('Projects was clicked');
    });

    //if close button was clicked, close the form
    const closeButton = document.querySelector('.closeIconButton');

    closeButton.addEventListener('click', () => {
        form.remove();
        console.log('Close button was clicked');
    });

    //call function for data submission
    form.addEventListener('submit', handleSubmit);

    if (form.textContent != '') {
        updateProjectDropdown();
    }
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
    titleInput.setAttribute('id', 'new-project-title');
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
        form.remove();
        createFormTasks();
        console.log('ToDo was clicked');
    })

    //Changes form to Projects Tab
    const addProjects = document.querySelector('#new-todo-projects')
    addProjects.addEventListener('click', () => {
        form.remove();
        addProject();
        console.log('Projects was clicked');
    });

    //if close button was clicked, close the form
    const closeButton = document.querySelector('.closeIconButton');

    closeButton.addEventListener('click', () => {
        form.remove();
        console.log('Close button was clicked');
    });

    form.addEventListener('submit', handleProjectSubmit)
}

export function renderProject(project) {
    //select project container
    const projectParent = document.querySelector('.projects');

    //create element for project title
    const projectContainer = document.createElement('li');
    projectContainer.className = 'project-items';

    //project title
    const projectTitle = document.createElement('div');
    projectTitle.className = 'project-title';
    projectTitle.setAttribute('value', `${project.title}`);
    projectTitle.textContent = project.title;

    //append
    projectContainer.appendChild(projectTitle);

    projectParent.appendChild(projectContainer);
}

export function addProjectDropdown(project) {
    const dropDown = document.querySelector('.drop-menu-option')

    const projectOptionFolder = document.createElement('option');
    projectOptionFolder.className = 'option';
    projectOptionFolder.setAttribute('value', `${project.title}`);
    projectOptionFolder.textContent = project.title;

    dropDown.appendChild(projectOptionFolder);
}

//Function to display task
export function renderTask(task) {
    const taskContainer = document.querySelector('.task-container');

    //Create task-card
    const taskCard = document.createElement('div');
    taskCard.className = 'task-card';

    //Input
    const completeCheck = document.createElement('input');
    completeCheck.setAttribute('type', 'checkbox');
    completeCheck.setAttribute('id', 'check');

    const taskTitle = document.createElement('div');
    taskTitle.className = 'task-title';
    taskTitle.textContent = task.title;

    const taskDetail = document.createElement('div');
    taskDetail.className = 'task-detail';
    taskDetail.textContent = task.detail

    const taskDate = document.createElement('div');
    taskDate.className = 'task-date';
    taskDate.textContent = task.date;

    const taskPriority = document.createElement('div');
    taskPriority.className = 'task-priority';
    taskPriority.textContent = task.priority;

    const editButton = document.createElement('img');
    editButton.setAttribute('id', 'edit');
    editButton.src = editIcon;
    editButton.onclick = () => editTask(task.id);

    const deleteButton = document.createElement('img');
    deleteButton.setAttribute('id', 'delete');
    deleteButton.src = trashIcon;
    deleteButton.onclick = () => removeTask(task.id);

    taskCard.appendChild(completeCheck);
    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDetail);
    taskCard.appendChild(taskDate);
    taskCard.appendChild(taskPriority);
    taskCard.appendChild(editButton);
    taskCard.appendChild(deleteButton);

    taskContainer.appendChild(taskCard);
}

export function openEditForm(task) {
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
    titleInput.textContent = task.title;

    const detailInput = document.createElement('textarea');
    detailInput.className = 'create-new-input-big';
    detailInput.setAttribute('id', 'new-todo-titles');
    detailInput.placeholder = 'Details: '
    detailInput.setAttribute('required', 'required');
    detailInput.textContent = task.detail;

    //date section
    const dateWrapper = document.createElement('div');
    dateWrapper.className = 'create-new-date-wrapper';

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
    dateInput.value = task.date;

    //add a dropdown menu for the projects folder
    const projectFolderContainer = document.createElement('div');
    projectFolderContainer.className = 'add-new-folder';

    const projectLabel = document.createElement('label')
    projectLabel.className = 'project-label';
    projectLabel.textContent = 'Project Label: ';

    const projectDropdown = document.createElement('select');
    projectDropdown.className = 'drop-menu-option';

    const projectOption = document.createElement('option');
    projectOption.className = 'default-option';
    projectOption.setAttribute('selected', 'selected')
    projectOption.setAttribute('value', 'Home');
    projectOption.textContent = 'Home';

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
    priorityLowInput.setAttribute('value', 'Low');

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
    priorityMedInput.setAttribute('value', 'Medium');

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
    priorityHighInput.setAttribute('value', 'High');

    //checks if the buttons work
    priorityHigh.addEventListener('click', () => {
        console.log('high was clicked');
    })

    //Iterate through the radio inputs
    const radio = document.querySelectorAll('input[name="option"]');

    radio.forEach(radio => {
        if (radio.value === task.priority) {
            radio.checked = true;
        }
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

    projectDropdown.appendChild(projectOption);
    projectFolderContainer.appendChild(projectLabel);
    projectFolderContainer.appendChild(projectDropdown);


    dateWrapper.appendChild(dateContainer);
    dateWrapper.appendChild(projectFolderContainer);

    //prioritysubmitcontainer & input append into newEntry
    newEntry.appendChild(titleInput);
    newEntry.appendChild(detailInput);
    newEntry.appendChild(dateWrapper);
    newEntry.appendChild(prioritySubmitContainer);

    //Sidebar append 
    sidebarOptions.appendChild(toDoList);
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

    //if close button was clicked, close the form
    const closeButton = document.querySelector('.closeIconButton');

    closeButton.addEventListener('click', () => {
        form.remove();
        console.log('Close button was clicked');
    });

    //call function for data submission
    form.addEventListener('submit', handleSubmit);

    task.id = Date.now();
    console.log(task.title);
    console.log(task.id);

    if (form.textContent != '') {
        updateProjectDropdown();
    }
} 
