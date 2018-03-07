//created with the aid of the model code found here https://codepen.io/franklynroth/pen/ZYeaBd
//It is acceptable to have these variables in the global space because they are not modifying anything
var listInput = document.getElementById("new-task");
var addButton = document.getElementsByTagName("button")[0];
var TasksHolder = document.getElementById("incomplete-tasks");
var CompletedHolder = document.getElementById("completed-tasks");

//New Task List Item
var createNewTaskElement = function(taskString) {
  //Creates a List Item
  var listItem = document.createElement("li");
  //is our checkbox to mark whether a task has been completed or not
  var checkBox = document.createElement("input"); // this is a checkbox
  //just a label nothing special
  var label = document.createElement("label"); // this is a label
  //is the user inputted text inputted while editting a list item
  var editInput = document.createElement("input"); // this is a text field
  //will serve as our edit button
  var editButton = document.createElement("button"); // this is a button
  //will serve as our delete button
  var deleteButton = document.createElement("button"); // this is a button

  //modifys each element
  checkBox.type = "checkbox";
  editInput.type = "text";
  editButton.innerText = "Edit";
  editButton.className = "edit";
  deleteButton.innerText = "Delete";
  deleteButton.className = "delete";
  label.innerText = taskString;

  //appends each element
  listItem.appendChild(checkBox);
  listItem.appendChild(label);
  listItem.appendChild(editInput);
  listItem.appendChild(editButton);
  listItem.appendChild(deleteButton);

  return listItem;
}

// Adds a new task
var addTask = function() {
  console.log("Add task...");
  //Creates a new list item with the user inputted text from #new-task:
  var listItem = createNewTaskElement(listInput.value);
  //Appends listItem to the TasksHolder
  TasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
  listInput.value = "";
}

// Edit an existing task
var editTask = function() {
  console.log("Edit Task...");
  var listItem = this.parentNode;
  var editInput = listItem.querySelector("input[type=text]")
  var label = listItem.querySelector("label");
  var containsClass = listItem.classList.contains("editMode");
    //checks if the class of the parent is in .editMode
  if(containsClass) {
      //switchs from .editMode
      //Makes the label text become the user inputted value
    label.innerText = editInput.value;
  } else {
      //Switchs to .editMode
      //user inputted value becomes the label's text
    editInput.value = label.innerText;
  }

    // Toggles .editMode on the parent allowing it to be editted
  listItem.classList.toggle("editMode");
}

// Deletes an existing task
var deleteTask = function() {
  console.log("Delete task...");
  var listItem = this.parentNode;
  var ul = listItem.parentNode;

  //Removes the parent list item from the list
  ul.removeChild(listItem);
}

// Marks a task as complete
var taskCompleted = function() {
  console.log("Task complete...");
  //Append the item to #completed-tasks
  var listItem = this.parentNode;
  CompletedHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskIncomplete);
}

// Marks a task as incomplete
var taskIncomplete = function() {
  console.log("Task Incomplete...");
  // When checkbox is unchecked
  // Append the item to #incomplete-tasks
  var listItem = this.parentNode;
  TasksHolder.appendChild(listItem);
  bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
  console.log("Bind list item events");
  //selects children of taskListItem
  var checkBox = taskListItem.querySelector("input[type=checkbox]");
  var editButton = taskListItem.querySelector("button.edit");
  var deleteButton = taskListItem.querySelector("button.delete");
  //bind editTask to the edit button
  editButton.onclick = editTask;
  //bind deleteTask to the delete button
  deleteButton.onclick = deleteTask;
  //bind checkBoxEventHandler to  the checkbox
  checkBox.onchange = checkBoxEventHandler;
}

//adding tasks currently does not function sadly (not sure why however all other functionality currently works)
// Sets the click handler to the addTask function
//addButton.onclick = addTask;
addButton.addEventListener("click", addTask);

// Cycles over the incompleteTaskHolder list items
for(var i = 0; i <  TasksHolder.children.length; i++) {
  // bind events as children (taskCompleted)
  bindTaskEvents(TasksHolder.children[i], taskCompleted);
}
// Cycles over the completeTaskHolder list items
for(var i = 0; i <  CompletedHolder.children.length; i++) {
  // bind events as children (taskIncompleted)
  bindTaskEvents(CompletedHolder.children[i], taskIncomplete);
}
