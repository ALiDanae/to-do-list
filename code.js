document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        addTask(taskInput.value);
        taskInput.value = '';
    });

    function addTask(task) {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${task}</span>
            <input type="checkbox" onclick="toggleTask(this)">
            <button onclick="removeTask(this)">Delete</button>
        `;
        taskList.appendChild(li);
    }
});

function toggleTask(checkbox) {
    const li = checkbox.parentElement;
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}