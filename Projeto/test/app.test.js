const { expect } = require('chai');
const {
    addTask,
    viewTasks,
    updateTaskStatus,
    deleteTask,
    tasks // Importe a variável tasks
} = require('../src/app'); // Ajuste o caminho de importação

describe('Funções do Sistema de Gerenciamento de Tarefas', () => {
    beforeEach(() => {
        // Limpa a lista de tarefas antes de cada teste
        tasks.length = 0;
    });

    it('Deve adicionar uma nova tarefa', () => {
        addTask('Desenvolver um novo recurso', 'Implementar um recurso de login');
        expect(tasks.length).to.equal(1);
        expect(tasks[0].title).to.equal('Desenvolver um novo recurso');
    });

    it('Deve visualizar a lista de tarefas', () => {
        addTask('Desenvolver um novo recurso', 'Implementar um recurso de login');
        addTask('Desenvolver API REST', 'Criar uma API REST para o aplicativo');
        const tasksList = viewTasks();
        expect(tasksList.length).to.equal(2);
        expect(tasksList[0].title).to.equal('Desenvolver um novo recurso');
        expect(tasksList[1].title).to.equal('Desenvolver API REST');
    });

    it('Deve atualizar o status de uma tarefa', () => {
        addTask('Desenvolver um novo recurso', 'Implementar um recurso de login');
        updateTaskStatus(0, 'Em andamento');
        expect(tasks[0].status).to.equal('Em andamento');
    });

    it('Deve excluir uma tarefa', () => {
        addTask('Desenvolver um novo recurso', 'Implementar um recurso de login');
        addTask('Desenvolver API REST', 'Criar uma API REST para o aplicativo');
        deleteTask(0);
        expect(tasks.length).to.equal(1);
        expect(tasks[0].title).to.equal('Desenvolver API REST');
    });
});
