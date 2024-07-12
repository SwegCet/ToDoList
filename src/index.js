import { addPopup } from './functions/add';
import './style.css'
//this file should contain importing from the function.js to just load up the html

const addButton = document.querySelector('.add');


addButton.addEventListener('click', () => {
    addPopup();
})