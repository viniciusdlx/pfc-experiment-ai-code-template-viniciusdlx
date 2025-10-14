// Enum para status das tarefas
export const TaskStatus = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress',
  DONE: 'done',
  CANCELLED: 'cancelled'
};

// Enum para prioridades
export const Priority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high',
  URGENT: 'urgent'
};

// Classe para representar uma tarefa
export class Task {
  constructor(id, code, title, description, priority = Priority.MEDIUM, assignee = null, dueDate = null) {
    this.id = id;
    this.code = code; // Código único da tarefa (ex: PROJ-123)
    this.title = title;
    this.description = description;
    this.status = TaskStatus.TODO;
    this.priority = priority;
    this.assignee = assignee;
    this.dueDate = dueDate;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completedAt = null;
    this.tags = [];
    this.estimatedHours = null;
    this.actualHours = 0;
  }

  // Métodos da classe Task
  updateStatus(newStatus) {
    // Implementar validação de transições de status
  }

  addTag(tag) {
    // Implementar adição de tags
  }

  removeTag(tag) {
    // Implementar remoção de tags
  }

  isOverdue() {
    // Implementar verificação de atraso
  }

  calculateProgress() {
    // Implementar cálculo de progresso baseado em status
  }
}

// Classe para representar um usuário
export class User {
  constructor(id, username, email, role = 'developer') {
    this.id = id;
    this.username = username;
    this.email = email;
    this.role = role; // 'admin', 'manager', 'developer'
    this.isActive = true;
    this.createdAt = new Date();
  }

  canManageTasks() {
    // Implementar verificação de permissões
  }

  canDeleteTasks() {
    // Implementar verificação de permissões
  }
}

// Classe para estatísticas do projeto
export class ProjectStats {
  constructor() {
    this.totalTasks = 0;
    this.completedTasks = 0;
    this.overdueTasks = 0;
    this.averageCompletionTime = 0;
    this.teamProductivity = 0;
  }

  calculateCompletionRate() {
    // Implementar cálculo de taxa de conclusão
  }

  calculateTeamProductivity() {
    // Implementar cálculo de produtividade da equipe
  }

  generateReport() {
    // Implementar geração de relatório
  }
}

// Classe principal do gerenciador
export class TodoManager {
  constructor(projectKey = 'PROJ') {
    this.currentUser = null;
    this.users = [];
    this.tasks = [];
    this.nextTaskId = 1;
    this.nextUserId = 1;
    this.projectKey = projectKey; // Prefixo para códigos das tarefas (ex: PROJ, TASK)
    this.taskCounters = new Map(); // Contadores por projeto
    this.projectStats = new ProjectStats();
    this.workflowRules = new Map();
    this.notifications = [];

    this.initializeDefaultUsers();
    this.initializeWorkflowRules();
    this.initializeProjectCounters();
  }

  /**
   * Inicializa usuários padrão do sistema
   */
  initializeDefaultUsers() {
    // Implementar criação de usuários padrão
  }

  /**
   * Configura regras de workflow entre status
   */
  initializeWorkflowRules() {
    // Implementar regras de transição de status
  }

  /**
   * Inicializa contadores de tarefas por projeto
   */
  initializeProjectCounters() {
    // Implementar inicialização de contadores
  }

  /**
   * Gera código único para nova tarefa
   * @param {string} projectKey - Chave do projeto (opcional, usa padrão se não informado)
   * @returns {string} Código da tarefa (ex: PROJ-123)
   */
  generateTaskCode(projectKey = null) {
    // Implementar geração de código único
  }

  /**
   * Busca tarefa por código
   * @param {string} code - Código da tarefa (ex: PROJ-123)
   * @returns {Task|null} Tarefa encontrada ou null
   */
  findTaskByCode(code) {
    // Implementar busca por código
  }

  /**
   * Realiza login no sistema
   * @param {string} username - Nome de usuário
   * @param {string} password - Senha
   * @returns {boolean} true se login bem-sucedido
   * @throws {Error} Se credenciais inválidas
   */
  login(username, password) {
    // Implementar autenticação
  }

  /**
   * Realiza logout do sistema
   */
  logout() {
    // Implementar logout
  }

  /**
   * Cria uma nova tarefa
   * @param {string} title - Título da tarefa
   * @param {string} description - Descrição da tarefa
   * @param {string} priority - Prioridade da tarefa
   * @param {string} assignee - Usuário responsável
   * @param {Date} dueDate - Data limite
   * @param {string} projectKey - Chave do projeto (opcional)
   * @returns {Task} Objeto da tarefa criada
   * @throws {Error} Se não estiver logado ou dados inválidos
   */
  createTask(title, description, priority = Priority.MEDIUM, assignee = null, dueDate = null, projectKey = null) {
    // Implementar criação de tarefa com código único
  }

  /**
   * Lista tarefas com filtros e paginação
   * @param {object} filters - Filtros (status, priority, assignee, etc.)
   * @param {number} page - Número da página
   * @param {number} limit - Itens por página
   * @param {string} sortBy - Campo para ordenação
   * @param {string} sortOrder - 'asc' ou 'desc'
   * @returns {object} Objeto com tarefas e metadados de paginação
   * @throws {Error} Se não estiver logado
   */
  listTasks(filters = {}, page = 1, limit = 10, sortBy = 'createdAt', sortOrder = 'desc') {
    // Implementar listagem com filtros
  }

  /**
   * Atualiza uma tarefa existente
   * @param {number} id - ID da tarefa
   * @param {object} data - Dados para atualizar
   * @returns {Task} Tarefa atualizada
   * @throws {Error} Se não estiver logado ou tarefa não existir
   */
  updateTask(id, data) {
    // Implementar atualização
  }

  /**
   * Remove uma tarefa
   * @param {number} id - ID da tarefa a ser removida
   * @returns {boolean} true se removida com sucesso
   * @throws {Error} Se não estiver logado ou tarefa não existir
   */
  deleteTask(id) {
    // Implementar remoção
  }

  /**
   * Altera o status de uma tarefa
   * @param {number} id - ID da tarefa
   * @param {string} newStatus - Novo status
   * @returns {Task} Tarefa atualizada
   * @throws {Error} Se transição não permitida
   */
  changeTaskStatus(id, newStatus) {
    // Implementar mudança de status com validação
  }

  /**
   * Atribui uma tarefa a um usuário
   * @param {number} taskId - ID da tarefa
   * @param {string} username - Nome do usuário
   * @returns {Task} Tarefa atualizada
   * @throws {Error} Se usuário não existir ou não tiver permissão
   */
  assignTask(taskId, username) {
    // Implementar atribuição
  }

  /**
   * Adiciona tempo trabalhado em uma tarefa
   * @param {number} taskId - ID da tarefa
   * @param {number} hours - Horas trabalhadas
   * @param {string} comment - Comentário sobre o trabalho
   * @returns {Task} Tarefa atualizada
   */
  logWork(taskId, hours, comment = '') {
    // Implementar registro de trabalho
  }

  /**
   * Busca tarefas por critérios
   * @param {object} criteria - Critérios de busca
   * @returns {Array} Array de tarefas encontradas
   */
  searchTasks(criteria) {
    // Implementar busca avançada
  }

  /**
   * Obtém estatísticas do projeto
   * @returns {object} Estatísticas atualizadas
   */
  getProjectStats() {
    // Implementar cálculo de estatísticas
  }

  /**
   * Obtém tarefas em atraso
   * @returns {Array} Array de tarefas em atraso
   */
  getOverdueTasks() {
    // Implementar busca de tarefas em atraso
  }

  /**
   * Obtém tarefas por usuário
   * @param {string} username - Nome do usuário
   * @returns {Array} Array de tarefas do usuário
   */
  getTasksByUser(username) {
    // Implementar busca por usuário
  }

  /**
   * Obtém relatório de produtividade
   * @param {Date} startDate - Data início
   * @param {Date} endDate - Data fim
   * @returns {object} Relatório de produtividade
   */
  getProductivityReport(startDate, endDate) {
    // Implementar relatório de produtividade
  }

  /**
   * Cria um novo usuário (apenas admin)
   * @param {object} userData - Dados do usuário
   * @returns {User} Usuário criado
   * @throws {Error} Se não for admin
   */
  createUser(userData) {
    // Implementar criação de usuário
  }

  /**
   * Lista todos os usuários
   * @returns {Array} Array de usuários
   * @throws {Error} Se não for admin
   */
  listUsers() {
    // Implementar listagem de usuários
  }

  /**
   * Obtém notificações do usuário
   * @returns {Array} Array de notificações
   */
  getNotifications() {
    // Implementar sistema de notificações
  }

  /**
   * Marca notificação como lida
   * @param {number} notificationId - ID da notificação
   */
  markNotificationAsRead(notificationId) {
    // Implementar marcação de notificação
  }

  /**
   * Exporta dados para CSV
   * @param {string} type - Tipo de exportação ('tasks', 'users', 'stats')
   * @returns {string} Dados em formato CSV
   */
  exportToCSV(type) {
    // Implementar exportação para CSV
  }

  /**
   * Valida se transição de status é permitida
   * @param {string} currentStatus - Status atual
   * @param {string} newStatus - Novo status
   * @returns {boolean} true se transição permitida
   */
  isValidStatusTransition(currentStatus, newStatus) {
    // Implementar validação de transições
  }

  /**
   * Calcula métricas de tempo
   * @param {number} taskId - ID da tarefa
   * @returns {object} Métricas de tempo
   */
  calculateTimeMetrics(taskId) {
    // Implementar cálculo de métricas
  }
}