'use strict';

const taskInput = document.querySelector('.task-input');
const tasksList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const form = document.querySelector('.create-task-form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (taskInput.value.trim() === '') {
        taskInput.value = '';
        return;
    };
    
    const taskId = crypto.randomUUID();
    
    const taskObj = {};
    taskObj[taskId] = taskInput.value;
    createSingleTaskElement(taskObj);
    storeTaskInLocalStorage(taskObj);
    
    taskInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
    const tasks = localStorage.getItem('tasks') !== null ?
        JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach((task) => {
        createSingleTaskElement(task);
    });
});

clearBtn.addEventListener('click', () => {
    if (confirm('Are you sure?')) {
        localStorage.clear();
        tasksList.innerHTML = '';
    }
});

function createSingleTaskElement(task) {
    const li = document.createElement('li');
    li.className = 'collection-item';
    
    li.dataset.id = Object.keys(task)[0];
    li.appendChild(document.createTextNode(Object.values(task)[0]));
    
    const deleteElement = document.createElement('span');
    deleteElement.className = 'delete-item';
    deleteElement.innerHTML = '<i class="fa fa-remove"></i>';
    const editElement = document.createElement('span');
    editElement.className = 'edit-item';
    editElement.innerHTML = '<i class="fa fa-edit"></i>';
    li.appendChild(editElement);
    li.appendChild(deleteElement);
    tasksList.appendChild(li);
};

function storeTaskInLocalStorage(task) {
    const tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.push(task);
    
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

tasksList.addEventListener('click', (taskDelete) => {
    const deleteCollectionItem = taskDelete.target.closest('.delete-item');
    if (deleteCollectionItem !== null) {
        if (confirm('Are you sure?')) {
            const taskItem = deleteCollectionItem.closest('.collection-item');
            const taskId = taskItem.dataset.id;
            taskItem.remove();
            removeTaskFromLocalStorage(taskId);
        }
    }
});

tasksList.addEventListener('click', (taskEdit) => {
    const editCollectionItem = taskEdit.target.closest('.edit-item');
    if (editCollectionItem !== null) {
        const taskItem = editCollectionItem.closest('.collection-item');
        const taskId = taskItem.dataset.id;
        const newText = prompt('Change your task', taskItem.textContent);
        if (newText !== null && newText.trim() !== '') {
            taskItem.firstChild.textContent = newText;
            editTaskInLocalStorage(taskId, newText);
        } else {
            alert('You write nothing');
        }
    }
});

function editTaskInLocalStorage(taskId, newText) {
    const tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks.forEach((task) => {
        if (Object.keys(task)[0] === taskId) {
            task[taskId] = newText;
        }
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
};

function removeTaskFromLocalStorage(taskId) {
    let tasks = localStorage.getItem('tasks') !== null ? JSON.parse(localStorage.getItem('tasks')) : [];
    tasks = tasks.filter(task => Object.keys(task)[0] !== taskId);
    localStorage.setItem('tasks', JSON.stringify(tasks));
};
