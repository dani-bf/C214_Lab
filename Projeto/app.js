const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const tasks = [];

function addTask(title, description, status = "A fazer") {
    tasks.push({ title, description, status });
    if (process.env.NODE_ENV !== 'test') {
        console.log("Tarefa adicionada com sucesso!");
    }
}

function viewTasks() {
    if (process.env.NODE_ENV !== 'test') {
        console.log("Lista de Tarefas:");
        tasks.forEach((task, index) => {
            console.log(`#${index + 1} - ${task.title} (${task.status})`);
            console.log(`   Descrição: ${task.description}`);
        });
    }
    return tasks;
}

function updateTaskStatus(index, newStatus) {
    if (index >= 0 && index < tasks.length) {
        tasks[index].status = newStatus;
        if (process.env.NODE_ENV !== 'test') {
            console.log("Status da tarefa atualizado com sucesso!");
        }
    } else if (process.env.NODE_ENV !== 'test') {
        console.log("Índice de tarefa inválido.");
    }
}

function deleteTask(index) {
    if (index >= 0 && index < tasks.length) {
        tasks.splice(index, 1);
        if (process.env.NODE_ENV !== 'test') {
            console.log("Tarefa excluída com sucesso!");
        }
    } else if (process.env.NODE_ENV !== 'test') {
        console.log("Índice de tarefa inválido.");
    }
}

function menu() {
    if (process.env.NODE_ENV !== 'test') {
        console.log("\nEscolha uma opção:");
        console.log("1. Adicionar uma nova tarefa");
        console.log("2. Visualizar a lista de tarefas");
        console.log("3. Atualizar o status de uma tarefa");
        console.log("4. Excluir uma tarefa");
        console.log("5. Sair");
    }

    rl.question("Opção: ", (option) => {
        switch (option) {
            case '1':
                rl.question("Título da tarefa: ", (title) => {
                    rl.question("Descrição da tarefa: ", (description) => {
                        addTask(title, description);
                        menu();
                    });
                });
                break;
            case '2':
                viewTasks();
                menu();
                break;
            case '3':
                rl.question("Índice da tarefa a ser atualizada: ", (index) => {
                    rl.question("Novo status da tarefa: ", (status) => {
                        updateTaskStatus(parseInt(index) - 1, status);
                        menu();
                    });
                });
                break;
            case '4':
                rl.question("Índice da tarefa a ser excluída: ", (index) => {
                    deleteTask(parseInt(index) - 1);
                    menu();
                });
                break;
            case '5':
                if (process.env.NODE_ENV !== 'test') {
                    console.log("Saindo...");
                }
                rl.close();
                break;
            default:
                if (process.env.NODE_ENV !== 'test') {
                    console.log("Opção inválida. Tente novamente.");
                }
                menu();
                break;
        }
    });
}

// Inicialize o menu quando o arquivo é executado diretamente
if (module.parent === null || process.env.NODE_ENV !== 'test') {
    menu();
}

module.exports = {
    addTask,
    viewTasks,
    updateTaskStatus,
    deleteTask,
    tasks,
    menu,
};
