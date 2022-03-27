var formE1 = document.querySelector('#task-form');
var tasksToDoE1 = document.querySelector('#tasks-to-do');
var createTaskHandler = function(event) {
    event.preventDefault();
    
    var listItemEl = document.createElement("li");
    listItemEl.className = "task-item";
    listItemEl.textContent = 'This is a new task';
    tasksToDoE1.appendChild(listItemEl);
}
formE1.addEventListener("submit", createTaskHandler);