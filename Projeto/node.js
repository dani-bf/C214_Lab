
// taskManager.js
const tasks = [];

function addTask(title, description, status = "A fazer") {
    tasks.push({ title, description, status });
}

function viewTasks() {
    return tasks;
}

function updateTaskStatus(index, newStatus) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].status = newStatus;
    }
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
    }
}

// Exemplo de uso
addTask("Comprar leite", "Ir à loja e comprar leite");
addTask("Estudar JavaScript", "Estudar JavaScript por 1 hora");
viewTasks(); // Mostra a lista de tarefas
