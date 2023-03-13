/*
Overall this creates the ability for the user of the To-Do list app to add and delete task 
at their own will. 
-Using severaly different variables for new tasks, add tasks, task list, empty message, 
new task test etc. 
->also appends the delete button to the end of the line on each task to insure the user 
knows what task they are deleting. 
*/


const form = document.getElementById("new-task-form");
const newTaskInput = document.getElementById("new-task");
const taskList = document.getElementById("task-list");
const emptyMessage = document.getElementById("empty-message");
// const checkbox = document.createElement("input");
// checkbox.type = "checkbox";


form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  // Get the value of the input field
  const newTaskText = newTaskInput.value.trim();

  //If the input isn't empty, add a new task on the list
  if(newTaskText !== ""){
    // Creating the variable to add a list item to the element
    const newTaskItem = document.createElement("li");
    //Creating the variable to add a button so we can delete items 
    const deleteButton = document.createElement("button");
    //supposed to create the checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    


    const label = document.createElement("label");
    label.appendChild(checkbox);
    label.appendChild(document.createTextNode(newTaskText));
    newTaskItem.appendChild(label);

    deleteButton.textContent = "Delete";    //sets the text of a newly created button ("deleteButton") to the string "Delete";
    newTaskItem.appendChild(deleteButton);  //this adds the Delete button to the end of every new task item. 

    //Add a click event listener to respond to the item being deleted (to actually delete)
    deleteButton.addEventListener("click", () =>{
        //remove the task item
        taskList.removeChild(newTaskItem);

        //If there are no tasks in the list, show empty
        if(taskList.children.length === 0) {
            emptyMessage.style.display = "block";
        }
    });
    
    checkbox.addEventListener("change", () => {
      if(checkbox.checked) {
        newTaskItem.classList.add("completed");
      } else {

        newTaskItem.classList.remove("completed");
      }
    });
    //Add a new task item to the task list and clear the input
    taskList.appendChild(newTaskItem);
    //Allows for previous input to not be shown in the field 
    newTaskInput.value = "";

    //Gets rid of the empty message if there are tasks 
    if(taskList.children.length > 0) {
        emptyMessage.style.display = "none";
    }
  }
});



