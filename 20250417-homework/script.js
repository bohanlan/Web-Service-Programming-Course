const taskInput = document.getElementById('newTask');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const notification = document.getElementById('notification');

function showNotification() {
    notification.classList.add('show');
    setTimeout(() => {
        notification.classList.remove('show');
    }, 1500);
}

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.className = 'list-group-item';
    listItem.innerHTML = `
        <span class="task-text">${taskText}</span>
        <button class="delete-btn">Delete</button>
    `;

    const taskSpan = listItem.querySelector('.task-text');
    taskSpan.addEventListener('click', function () {
        this.classList.toggle('completed');
    });

    const deleteButton = listItem.querySelector('.delete-btn');
    deleteButton.addEventListener('click', function () {
        listItem.remove();
    });

    taskList.appendChild(listItem);
    taskInput.value = '';
    showNotification();
}

addTaskBtn.addEventListener('click', addTask);

taskInput.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
