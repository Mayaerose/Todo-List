// grab the three things on the page 
const taskInput = document.querySelector('#taskInput');
const addButton = document.querySelector('#addButton');
const taskList = document.querySelector('#taskList');

function addTask() {

    let text = taskInput.value.trim();

    if (text === "") {
        return;
    }
 
    let newTask = document.createElement('li');
 
    newTask.innerText = text;
 
    taskList.appendChild(newTask);
 
    taskInput.value = "";
}
 
addButton.addEventListener('click', addTask);