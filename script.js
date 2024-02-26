const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = document.createElement('li');
        taskItem.classList.add('task-item');
        
        const taskTextElement = document.createElement('div');
        taskTextElement.classList.add('task-text');
        taskTextElement.textContent = taskText;
        taskItem.appendChild(taskTextElement);

        const taskControls = document.createElement('div');
        taskControls.classList.add('task-controls');

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-btn');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
        deleteButton.addEventListener('click', () => {
            taskItem.remove();
        });
        taskControls.appendChild(deleteButton);

        const completeButton = document.createElement('button');
        completeButton.classList.add('complete-btn');
        completeButton.innerHTML = '<i class="fas fa-check"></i>';
        completeButton.addEventListener('click', () => {
            taskItem.classList.toggle('completed-task');
            if (taskItem.classList.contains('completed-task')) {
                taskItem.style.textDecoration = 'line-through';
                taskItem.style.color = 'rgba(255, 255, 255, 0.5)';
                taskControls.remove(); // Remove the controls when task is completed
                completedList.appendChild(taskItem.cloneNode(true)); // Clone the task to completed list
                taskItem.remove(); // Remove from active list
            } else {
                taskItem.style.textDecoration = 'none';
                taskItem.style.color = '#fff';
            }
        });
        taskControls.appendChild(completeButton);

        taskItem.appendChild(taskControls);

        taskList.appendChild(taskItem);
        taskInput.value = '';
    } else {
        alert('Please enter a task!');
    }
}
