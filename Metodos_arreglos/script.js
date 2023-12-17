 const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const taskList = document.getElementById('task-list');
const total = document.getElementById('total');
const completed = document.getElementById('completed');

let tasks = [];
let id = 0;

function addTask(e) {
    e.preventDefault();

    if (!taskInput.value.trim()) {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    tasks.push({ id: id, task: taskInput.value, completed: false });
    taskInput.value = '';
    id++;
    updateView();
}

function toggleCompleted(id) {
    const task = tasks.find(task => task.id === id);
    task.completed = !task.completed;
    updateView();
}

function removeTask(id) {
    tasks = tasks.filter(task => task.id !== id);
    updateView();
}


function addTask(e) {
    e.preventDefault();

    if (!taskInput.value.trim()) {
        alert('Por favor, ingrese una tarea.');
        return;
    }

    tasks.push({ id: id, task: taskInput.value, completed: false });
    taskInput.value = '';
    id++;
    updateView();
}

function updateView() {
    taskList.innerHTML = '';
    let totalTasks = 0;
    let totalCompleted = 0;

    tasks.forEach(task => {
        totalTasks++;
        if (task.completed) totalCompleted++;

        const li = document.createElement('li');
        li.textContent = `${task.id}: ${task.task}`; 

        const toggleBtn = document.createElement('button');
        toggleBtn.textContent = task.completed ? 'Desmarcar' : 'Marcar como completa';
        toggleBtn.addEventListener('click', () => toggleCompleted(task.id));

        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.addEventListener('click', () => removeTask(task.id));

        li.appendChild(toggleBtn);
        li.appendChild(removeBtn);
        taskList.appendChild(li);
    });

    total.textContent = totalTasks;
    completed.textContent = totalCompleted;
}


let tareas = [];
let tareasCompletadas = 0;

function agregarTarea(descripcion) {
    tareas.push({ id: Date.now(), descripcion, realizada: false });
    actualizarListaTareas();
}

function eliminarTarea(tareaId) {
    tareas = tareas.filter(tarea => tarea.id !== tareaId);
    actualizarListaTareas();
}


function marcarTareaComoRealizada(tareaId) {
    let tarea = tareas.find(tarea => tarea.id === tareaId);
    if (tarea) {
        tarea.realizada = true;
        tareasCompletadas++;
        actualizarListaTareas();
    }
}


function actualizarListaTareas() {
}

agregarTarea("mercado");
agregarTarea("Estudiar");
agregarTarea("pasear");

console.log(tareas);
console.log(tareasCompletadas);

agregarTarea("gimnasio");

eliminarTarea(tareas[0].id);

marcarTareaComoRealizada(tareas[0].id);

console.log(tareas);
console.log(tareasCompletadas);

taskForm.addEventListener('submit', addTask);