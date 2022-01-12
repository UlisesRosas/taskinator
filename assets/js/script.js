var formE1 = document.querySelector("#task-form");
var taskToDoE1 = document.querySelector("#tasks-to-do");

// crate function to handle creating the task items
var createTaskHandler = function() {
    // this is to prevent the browser from refreshing and removing our task
    event.preventDefault();

    var listItemE1 = document.createElement("li");
    listItemE1.className ="task-item";
    listItemE1.textContent = "This is a new task."; 
    taskToDoE1.appendChild(listItemE1);
};

// this is to add event listener to the entire form when it is submited which the button also does because of it type value
formE1.addEventListener("submit", createTaskHandler);

