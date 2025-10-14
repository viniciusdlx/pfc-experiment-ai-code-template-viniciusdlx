import { TodoManager, Task, TaskStatus, Priority } from './todoManager.js';

describe('TodoManager', () => {
  let todoManager;

  beforeEach(() => {
    todoManager = new TodoManager();
  });

  describe('createTask', () => {
    test('deve criar uma tarefa com dados básicos e código Jira', () => {
      const task = todoManager.createTask('Tarefa 1', 'Descrição da tarefa', Priority.HIGH);

      expect(task).toBeInstanceOf(Task);
      expect(task.title).toBe('Tarefa 1');
      expect(task.description).toBe('Descrição da tarefa');
      expect(task.priority).toBe(Priority.HIGH);
      expect(task.status).toBe(TaskStatus.TODO);
      expect(task.id).toBe(1);
      expect(task.code).toBe('PROJ-1');
    });

    test('deve criar tarefa com prioridade padrão', () => {
      const task = todoManager.createTask('Tarefa 2', 'Descrição');

      expect(task.priority).toBe(Priority.MEDIUM);
      expect(task.code).toBe('PROJ-2');
    });

    test('deve incrementar ID e código automaticamente', () => {
      const task1 = todoManager.createTask('Tarefa 1', 'Descrição');
      const task2 = todoManager.createTask('Tarefa 2', 'Descrição');

      expect(task1.id).toBe(1);
      expect(task1.code).toBe('PROJ-1');
      expect(task2.id).toBe(2);
      expect(task2.code).toBe('PROJ-2');
    });
  });

  describe('listTasks', () => {
    test('deve retornar array vazio quando não há tarefas', () => {
      const tasks = todoManager.listTasks();
      expect(tasks).toEqual([]);
    });

    test('deve retornar todas as tarefas criadas', () => {
      todoManager.createTask('Tarefa 1', 'Descrição 1');
      todoManager.createTask('Tarefa 2', 'Descrição 2');

      const tasks = todoManager.listTasks();
      expect(tasks).toHaveLength(2);
    });
  });

  describe('updateTask', () => {
    test('deve atualizar título da tarefa', () => {
      const task = todoManager.createTask('Título original', 'Descrição');
      const updatedTask = todoManager.updateTask(task.id, { title: 'Novo título' });

      expect(updatedTask.title).toBe('Novo título');
      expect(updatedTask.description).toBe('Descrição');
    });

    test('deve atualizar prioridade da tarefa', () => {
      const task = todoManager.createTask('Tarefa', 'Descrição', Priority.LOW);
      const updatedTask = todoManager.updateTask(task.id, { priority: Priority.HIGH });

      expect(updatedTask.priority).toBe(Priority.HIGH);
    });

    test('deve retornar null para ID inexistente', () => {
      const result = todoManager.updateTask(999, { title: 'Novo título' });
      expect(result).toBeNull();
    });
  });

  describe('deleteTask', () => {
    test('deve remover tarefa existente', () => {
      const task = todoManager.createTask('Tarefa', 'Descrição');
      const result = todoManager.deleteTask(task.id);

      expect(result).toBe(true);
      expect(todoManager.listTasks()).toHaveLength(0);
    });

    test('deve retornar false para ID inexistente', () => {
      const result = todoManager.deleteTask(999);
      expect(result).toBe(false);
    });
  });

  describe('changeTaskStatus', () => {
    test('deve mudar status de TODO para IN_PROGRESS', () => {
      const task = todoManager.createTask('Tarefa', 'Descrição');
      const updatedTask = todoManager.changeTaskStatus(task.id, TaskStatus.IN_PROGRESS);

      expect(updatedTask.status).toBe(TaskStatus.IN_PROGRESS);
    });

    test('deve mudar status para DONE e definir completedAt', () => {
      const task = todoManager.createTask('Tarefa', 'Descrição');
      const updatedTask = todoManager.changeTaskStatus(task.id, TaskStatus.DONE);

      expect(updatedTask.status).toBe(TaskStatus.DONE);
      expect(updatedTask.completedAt).toBeInstanceOf(Date);
    });

    test('deve retornar null para ID inexistente', () => {
      const result = todoManager.changeTaskStatus(999, TaskStatus.IN_PROGRESS);
      expect(result).toBeNull();
    });
  });

  describe('filterTasksByStatus', () => {
    test('deve filtrar tarefas por status TODO', () => {
      todoManager.createTask('Tarefa 1', 'Descrição');
      const task2 = todoManager.createTask('Tarefa 2', 'Descrição');
      todoManager.changeTaskStatus(task2.id, TaskStatus.IN_PROGRESS);

      const todoTasks = todoManager.filterTasksByStatus(TaskStatus.TODO);
      expect(todoTasks).toHaveLength(1);
      expect(todoTasks[0].title).toBe('Tarefa 1');
    });

    test('deve retornar array vazio para status sem tarefas', () => {
      const doneTasks = todoManager.filterTasksByStatus(TaskStatus.DONE);
      expect(doneTasks).toEqual([]);
    });
  });

  describe('filterTasksByPriority', () => {
    test('deve filtrar tarefas por prioridade HIGH', () => {
      todoManager.createTask('Tarefa 1', 'Descrição', Priority.HIGH);
      todoManager.createTask('Tarefa 2', 'Descrição', Priority.LOW);

      const highPriorityTasks = todoManager.filterTasksByPriority(Priority.HIGH);
      expect(highPriorityTasks).toHaveLength(1);
      expect(highPriorityTasks[0].title).toBe('Tarefa 1');
    });
  });

  describe('searchTasks', () => {
    test('deve buscar tarefas por título', () => {
      todoManager.createTask('Implementar login', 'Descrição');
      todoManager.createTask('Documentar API', 'Descrição');

      const results = todoManager.searchTasks('login');
      expect(results).toHaveLength(1);
      expect(results[0].title).toBe('Implementar login');
    });

    test('deve retornar array vazio quando não encontra', () => {
      todoManager.createTask('Tarefa 1', 'Descrição');

      const results = todoManager.searchTasks('inexistente');
      expect(results).toEqual([]);
    });
  });

  describe('getTaskCounts', () => {
    test('deve contar tarefas por status', () => {
      const task1 = todoManager.createTask('Tarefa 1', 'Descrição');
      const task2 = todoManager.createTask('Tarefa 2', 'Descrição');
      todoManager.changeTaskStatus(task1.id, TaskStatus.IN_PROGRESS);
      todoManager.changeTaskStatus(task2.id, TaskStatus.DONE);

      const counts = todoManager.getTaskCounts();
      expect(counts).toEqual({
        [TaskStatus.TODO]: 0,
        [TaskStatus.IN_PROGRESS]: 1,
        [TaskStatus.DONE]: 1
      });
    });

    test('deve retornar contadores zerados quando não há tarefas', () => {
      const counts = todoManager.getTaskCounts();
      expect(counts).toEqual({
        [TaskStatus.TODO]: 0,
        [TaskStatus.IN_PROGRESS]: 0,
        [TaskStatus.DONE]: 0
      });
    });
  });

  describe('generateTaskCode', () => {
    test('deve gerar código único para cada tarefa', () => {
      const code1 = todoManager.generateTaskCode();
      const code2 = todoManager.generateTaskCode();

      expect(code1).toBe('PROJ-1');
      expect(code2).toBe('PROJ-2');
    });

    test('deve gerar código com projeto específico', () => {
      const code = todoManager.generateTaskCode('TASK');

      expect(code).toBe('TASK-1');
    });
  });

  describe('findTaskByCode', () => {
    test('deve encontrar tarefa por código', () => {
      const task = todoManager.createTask('Tarefa', 'Descrição');
      const foundTask = todoManager.findTaskByCode(task.code);

      expect(foundTask).toEqual(task);
    });

    test('deve retornar null para código inexistente', () => {
      const result = todoManager.findTaskByCode('PROJ-999');
      expect(result).toBeNull();
    });
  });
});