// Enum para status das tarefas
const TaskStatus = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  DONE: 'done'
};

// Enum para prioridades
const Priority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
};

// Classe para representar uma tarefa
class Task {
  constructor(id, code, title, description, priority = Priority.MEDIUM) {
    this.id = id;
    this.code = code; // Código único da tarefa (ex: PROJ-123)
    this.title = title;
    this.description = description;
    this.status = TaskStatus.TODO;
    this.priority = priority;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completedAt = null;
  }

  updateStatus(newStatus) {
    // Implementar mudança de status
  }

  isOverdue() {
    // Implementar verificação de atraso (opcional)
  }
}

// Classe principal do gerenciador
class TodoManager {
  constructor(projectKey) {
    this.tasks = [];
    this.nextTaskId = 1;
    this.projectKey = projectKey; // Prefixo para códigos das tarefas
    this.taskCounters = new Map(); // Contadores por projeto
  }

  createTask(title, description, priority = Priority.MEDIUM) {
    // Implementar criação de tarefa com código único
  }

  listTasks() {
    // Implementar listagem de tarefas
  }

  updateTask(id, data) {
    // Implementar atualização de tarefa
  }

  deleteTask(id) {
    // Implementar remoção de tarefa
  }

  changeTaskStatus(id, newStatus) {
    // Implementar mudança de status
  }

  filterTasksByStatus(status) {
    // Implementar filtro por status
  }

  filterTasksByPriority(priority) {
    // Implementar filtro por prioridade
  }

  searchTasks(query) {
    // Implementar busca por título
  }

  getTaskCounts() {
    // Implementar contagem de tarefas
  }

  generateTaskCode(projectKey = null) {
    // Implementar geração de código único (ex: PROJ-123)
  }

  findTaskByCode(code) {
    // Implementar busca de tarefa por código
  }
}

module.exports = { Task, TodoManager, TaskStatus, Priority };
