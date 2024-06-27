// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const task = taskInput.value.trim();
    
    if (task === '') {
        alert('Please enter a task.');
        return;
    }

    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.textContent = task;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };

    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    taskInput.value = '';
}

// Function to delete a task
function deleteTask(taskItem) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(taskItem);
}
