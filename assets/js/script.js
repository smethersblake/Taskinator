var formE1 = document.querySelector('#task-form');
var tasksToDoE1 = document.querySelector('#tasks-to-do');
var taskFormHandler = function(event) {
    event.preventDefault();
    var taskNameInput = document.querySelector("input[name = 'task-name']").value;
    var taskTypeInput = document.querySelector("select[name='task-type']").value;
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };
    //send it as an argument to createTaskE1
    createTaskEl(taskDataObj);
    console.log(taskTypeInput);
    
}
var createTaskEl = function(taskDataObj) {
    var listItemEl = document.createElement("li");
    // create list item
    listItemEl.className = "task-item";
    // create div to hold task info and add to list item
    var taskInfoEl = document.createElement("div");
    // give it a class name
    taskInfoEl.className = "task-info";
    // add HTML contente to div
    taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
    listItemEl.appendChild(taskInfoEl);
    tasksToDoE1.appendChild(listItemEl);
}
formE1.addEventListener("submit", taskFormHandler);