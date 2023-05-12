/*
    Tasks :
    [1] use sweet alert if input is empty
    [2] check if task exists
    [3] create delete all tasks button
    [4] create finish all tasks button
    [5] add tasks to local storage

*/

// setting up variables
let theInput = document.querySelector(".add-task input");
let theAddButton = document.querySelector(".add-task .plus");
let tasksContainer = document.querySelector(".tasks-content");
let tasksCount = document.querySelector(".task-count span");
let tasksCompleted = document.querySelector(".tasks-completed span");
// let tasksCompleted = document.querySelector(".tasks-completed span");

// focus on input field
window.onload = function () {
  
    theInput.focus();
};



// adding the task
theAddButton.onclick = function () {

    // if input is empty
    if (theInput.value === '') {
        console.log("no value");

    } else {


        let noTaskMsg = document.querySelector(".no-tasks-message");

        // check if span with no tasks message exists
        if (document.body.contains(document.querySelector(".no-tasks-message"))) {

            // remove no tasks message
            noTaskMsg.remove();

        }


        // console.log(theInput.value);


        // create main span element
        let mainSpan = document.createElement("span");

        // create delete button
        let deleteElement = document.createElement("span");

        // create the main span text
        let text = document.createTextNode(theInput.value);

          // create the delete button text
        let deleteText = document.createTextNode("Delete");


        // add text to main span
        mainSpan.appendChild(text);

        // add class to span
        mainSpan.className = 'task-box';

        // add text to delete button
        deleteElement.appendChild(deleteText);

        // add class to delete button
        deleteElement.className = 'delete';

        // add delete button to main span
        mainSpan.appendChild(deleteElement);

        // add the task to the container
        tasksContainer.appendChild(mainSpan);

        // empty the input
        theInput.value ='';

        // focus on field
        theInput.focus();

        // calculate tasks
        calculateTasks();

    }

};


document.addEventListener('click', function(e){

    // delete task
    if (e.target.className == 'delete'){

        // remove current task
        e.target.parentNode.remove();

        // check number of tasks inside the container
        if (tasksContainer.childElementCount == 0) {

            createNoTasks();


        }


    }

    // finish task
    if (e.target.classList.contains("task-box")) {

        // toggle class finished
        e.target.classList.toggle("finished");

        
    }
        // calculate tasks
        calculateTasks();
});

// function to create no tasks message
function createNoTasks(){

    // create msg span
    let msgSpan = document.createElement("span");

    // create the  text message
    let msgText = document.createTextNode("No Tasks To Show");

    // add  text to message span element
    msgSpan.appendChild(msgText);

    // add class to message span
    msgSpan.className = 'no-tasks-message';

    // add the message span element to the task container
    tasksContainer.appendChild(msgSpan);

}

// function to calculate tasks
function calculateTasks() {

    // calculate all tasks
    tasksCount.innerHTML = document.querySelectorAll(".tasks-content .task-box").length;

    // calculate completed tasks
    tasksCompleted.innerHTML = document.querySelectorAll(".tasks-content .finished").length;

}