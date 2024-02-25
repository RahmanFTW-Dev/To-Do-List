function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() !== "") {
        var taskText = taskInput.value;
        taskInput.value = "";

        var li = document.createElement("li");
        
        // Create a span element for the task text
        var taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;

        // Create a span element for the date and time
        var dateSpan = document.createElement("span");
        var dateTime = new Date();
        var formattedDateTime = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} ${dateTime.toLocaleTimeString()}`;
        dateSpan.textContent = formattedDateTime;

        // Append both spans to the list item
        li.appendChild(taskSpan);
        li.appendChild(dateSpan);

        var deleteButton = document.createElement("button");
        deleteButton.textContent = "❌"; // Use "❌" for delete button
        deleteButton.className = "delete-btn";
        deleteButton.onclick = function () {
            taskList.removeChild(li);
        };

        var completeButton = document.createElement("button");
        completeButton.textContent = "Complete";
        completeButton.className = "complete-btn";
        completeButton.onclick = function () {
            moveTaskToCompleted(li);
        };

        li.appendChild(deleteButton);
        li.appendChild(completeButton);
        taskList.appendChild(li);
    }
}

function moveTaskToCompleted(taskElement) {
    taskElement.classList.add("completed-task"); // Apply completed task styling
    taskElement.removeChild(taskElement.querySelector(".delete-btn")); // Remove delete button
    taskElement.removeChild(taskElement.querySelector(".complete-btn")); // Remove complete button

    var completedTasksList = document.getElementById("completedTasks");
    completedTasksList.appendChild(taskElement); // Append task to completed tasks list

    // Update the date format
    var dateSpan = taskElement.querySelector("span:nth-child(2)");
    var dateTime = new Date();
    var formattedDateTime = `${dateTime.getDate()}/${dateTime.getMonth() + 1}/${dateTime.getFullYear()} ${dateTime.toLocaleTimeString()}`;
    dateSpan.textContent = formattedDateTime;
}
