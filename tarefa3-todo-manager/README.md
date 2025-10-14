# ✅ Tarefa 3 - Gerenciador de Tarefas

## 🎯 Objetivo
Implementar um **sistema de gerenciamento de tarefas** em JavaScript, utilizando classes e métodos para organizar e manipular tarefas.

**Dificuldade:** Medium  
**Tempo estimado:** 30-45 minutos  
**Categoria:** Classes, Arrays, Objetos, JavaScript

---

## 📝 Descrição do Problema

### **Funcionalidades Obrigatórias:**
1. **Criar tarefas** com título, descrição e prioridade
2. **Listar tarefas** existentes
3. **Atualizar tarefas** (título, descrição, prioridade)
4. **Remover tarefas** por ID
5. **Alterar status** das tarefas (TODO → IN_PROGRESS → DONE)
6. **Filtrar tarefas** por status e prioridade
7. **Buscar tarefas** por título
8. **Contar tarefas** por status

### **Estrutura de Dados:**
```javascript
// Status possíveis
TaskStatus = {
  TODO: 'todo',
  IN_PROGRESS: 'in_progress', 
  DONE: 'done'
}

// Prioridades possíveis
Priority = {
  LOW: 'low',
  MEDIUM: 'medium',
  HIGH: 'high'
}

// Estrutura da tarefa
Task = {
  id: 1,
  code: "PROJ-123", // Código único estilo Jira
  title: "Implementar login",
  description: "Criar sistema de autenticação",
  status: "todo",
  priority: "high",
  createdAt: Date,
  updatedAt: Date,
  completedAt: null
}
```

### **Sistema de Códigos (Estilo Jira):**
- **Formato**: `PROJ-123`, `TASK-456`, `FEAT-789`
- **Geração automática**: Cada tarefa recebe um código único
- **Busca por código**: Pode encontrar tarefa pelo código
- **Contadores**: Mantém contador por projeto

---

## ✅ Requisitos obrigatórios

### 1. **Classe Task**
- `constructor(id, title, description, priority)` - Cria nova tarefa
- `updateStatus(newStatus)` - Muda status da tarefa
- `isOverdue()` - Verifica se está atrasada (opcional)

### 2. **Classe TodoManager**
- `createTask(title, description, priority)` - Cria nova tarefa com código único
- `listTasks()` - Lista todas as tarefas
- `updateTask(id, data)` - Atualiza tarefa existente
- `deleteTask(id)` - Remove tarefa
- `changeTaskStatus(id, newStatus)` - Muda status
- `filterTasksByStatus(status)` - Filtra por status
- `filterTasksByPriority(priority)` - Filtra por prioridade
- `searchTasks(query)` - Busca por título
- `getTaskCounts()` - Conta tarefas por status
- `generateTaskCode(projectKey)` - Gera código único (PROJ-123)
- `findTaskByCode(code)` - Busca tarefa por código

---

## 🧩 Estrutura esperada

Implemente as classes em:

````

tarefa3-todo-manager/todoManager.js

````

### **Classes obrigatórias:**
- `Task` - Representa uma tarefa individual (com código Jira)
- `TodoManager` - Gerencia todas as tarefas (com geração de códigos)

---

## 💡 Dicas de Implementação

### **Classe Task:**
```javascript
export class Task {
  constructor(id, title, description, priority = Priority.MEDIUM) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = TaskStatus.TODO;
    this.priority = priority;
    this.createdAt = new Date();
    this.updatedAt = new Date();
    this.completedAt = null;
  }

  updateStatus(newStatus) {
    // Validar se newStatus é válido
    // Atualizar this.status
    // Atualizar this.updatedAt
    // Se status for DONE, definir this.completedAt
  }
}
```

### **Classe TodoManager:**
```javascript
export class TodoManager {
  constructor() {
    this.tasks = [];
    this.nextTaskId = 1;
  }

  createTask(title, description, priority = Priority.MEDIUM) {
    // Criar nova Task com ID único
    // Adicionar ao array this.tasks
    // Retornar a tarefa criada
  }

  listTasks() {
    // Retornar array de todas as tarefas
  }

  findTaskById(id) {
    // Método auxiliar para encontrar tarefa por ID
  }
}
```

---

## 🧩 Exemplos de Uso

```javascript
// Criar gerenciador
const todoManager = new TodoManager();

// Criar tarefas (códigos gerados automaticamente)
const task1 = todoManager.createTask(
  "Implementar login", 
  "Criar sistema de autenticação", 
  Priority.HIGH
);
console.log(task1.code); // "PROJ-1"

const task2 = todoManager.createTask(
  "Documentar API", 
  "Escrever documentação da API", 
  Priority.MEDIUM
);
console.log(task2.code); // "PROJ-2"

// Listar tarefas
console.log(todoManager.listTasks());

// Atualizar tarefa
todoManager.updateTask(task1.id, {
  title: "Implementar autenticação JWT",
  priority: Priority.HIGH
});

// Mudar status
todoManager.changeTaskStatus(task1.id, TaskStatus.IN_PROGRESS);
todoManager.changeTaskStatus(task1.id, TaskStatus.DONE);

// Filtrar tarefas
const todoTasks = todoManager.filterTasksByStatus(TaskStatus.TODO);
const highPriorityTasks = todoManager.filterTasksByPriority(Priority.HIGH);

// Buscar tarefas
const searchResults = todoManager.searchTasks("login");

// Buscar por código
const taskByCode = todoManager.findTaskByCode("PROJ-1");
console.log(taskByCode.title); // "Implementar login"

// Contar tarefas
const counts = todoManager.getTaskCounts();
console.log(counts); // { todo: 1, in_progress: 0, done: 1 }

// Remover tarefa
todoManager.deleteTask(task2.id);
```

---

## 🧪 Testes e Cobertura

Implemente testes unitários no arquivo `todoManager.test.js` para validar:

- **Criação de tarefas** com diferentes prioridades
- **Listagem de tarefas** (vazia e com tarefas)
- **Atualização de tarefas** (título, descrição, prioridade)
- **Remoção de tarefas** (existente e inexistente)
- **Mudança de status** (transições válidas e inválidas)
- **Filtros** por status e prioridade
- **Busca** por título (case insensitive)
- **Contagem** de tarefas por status
- **Casos extremos** (ID inválido, dados nulos, etc.)

**Executar testes:**
```bash
npm run test:tarefa3
```

**Gerar relatório de cobertura:**
```bash
npm test
```

A **cobertura de testes** será considerada na avaliação.

---

## 🧠 Critérios de Avaliação

| Critério                       | Descrição                                    |
| ------------------------------ | -------------------------------------------- |
| ✅ Funcionalidade              | Todos os métodos implementados corretamente  |
| ✅ Estrutura OO                | Classes bem organizadas e coesas             |
| ✅ Gerenciamento de estado     | IDs únicos, datas atualizadas corretamente   |
| ✅ Validação de dados          | Validação de entrada e tratamento de erros   |
| ✅ Filtros e busca             | Filtros e busca funcionando corretamente     |
| ✅ Tratamento de bordas        | Casos extremos e edge cases                  |
| 🧹 Qualidade do código         | Código limpo, legível e bem estruturado      |
| 🧪 Cobertura de testes         | Testes abrangentes para todos os cenários   |

---

## 🎯 Por que é PERFEITO para o experimento:

### **🤖 IA vai ter DIFICULDADE:**
- **Estrutura de classes**: Pode não organizar bem as responsabilidades
- **Gerenciamento de estado**: Pode não manter IDs únicos corretamente
- **Validação**: Pode não implementar validação robusta
- **Filtros**: Pode não implementar filtros eficientes

### **👨‍💻 Senior resolve com EXPERIÊNCIA:**
- **Organização**: Estrutura classes de forma lógica
- **Estado**: Mantém IDs únicos e datas corretamente
- **Validação**: Implementa validação robusta
- **Performance**: Implementa filtros e busca eficientes

### **👶 Qualquer pessoa pode entender:**
- **Conceito simples**: Gerenciador de tarefas é familiar
- **Funcionalidades claras**: CRUD básico é intuitivo
- **Sem barreiras**: Não precisa conhecer algoritmos complexos

---

## 📚 Referências

- [JavaScript Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)
- [Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
- [Object Manipulation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

````