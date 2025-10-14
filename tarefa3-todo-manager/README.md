# ✅ Tarefa 3 - Sistema de Gerenciamento de Tarefas Avançado

## 🎯 Objetivo
Implementar um **sistema completo de gerenciamento de tarefas** com workflow, múltiplas classes, status diferentes e regras de negócio complexas.  
O sistema deve gerenciar tarefas, usuários, estatísticas e permitir transições de status com validações.

---

## ✅ Requisitos obrigatórios

### 1. **Sistema de Status e Workflow**
- **Status disponíveis**: `todo`, `in_progress`, `done`, `cancelled`
- **Transições válidas**:
  - `todo` → `in_progress` ou `cancelled`
  - `in_progress` → `done` ou `cancelled`
  - `done` → não pode mudar
  - `cancelled` → não pode mudar
- Validação obrigatória nas transições de status

### 2. **Sistema de Prioridades**
- **Prioridades**: `low`, `medium`, `high`, `urgent`
- Tarefas urgentes têm regras especiais (não podem ser canceladas)

### 3. **Gerenciamento de Usuários**
- **Roles**: `admin`, `manager`, `developer`
- **Permissões**:
  - `admin`: pode fazer tudo
  - `manager`: pode gerenciar tarefas de outros usuários
  - `developer`: pode gerenciar apenas suas próprias tarefas

### 4. **Sistema de Códigos de Tarefa (como Jira)**
- **Formato**: `PROJ-123`, `TASK-456`, `BUG-789`
- **Geração automática**: Cada tarefa recebe código único
- **Busca por código**: Método `findTaskByCode(code)`
- **Múltiplos projetos**: Suporte a diferentes chaves de projeto

### 5. **Funcionalidades da Classe Task**
- `updateStatus(newStatus)` - Valida transições
- `addTag(tag)` / `removeTag(tag)` - Sistema de tags
- `isOverdue()` - Verifica se está atrasada
- `calculateProgress()` - Calcula progresso (0-100%)

### 6. **Funcionalidades da Classe TodoManager**

#### **Autenticação e Autorização:**
- `login(username, password)` - Login com validação
- `logout()` - Limpa sessão atual
- `createUser(userData)` - Cria usuários (apenas admin)

#### **Gerenciamento de Tarefas:**
- `createTask(title, description, priority, assignee, dueDate, projectKey)` - Cria com código único
- `listTasks(filters, page, limit, sortBy, sortOrder)` - Lista com filtros avançados
- `updateTask(id, data)` - Atualiza com validações
- `deleteTask(id)` - Remove com verificação de permissões
- `changeTaskStatus(id, newStatus)` - Muda status com validação de workflow
- `assignTask(taskId, username)` - Atribui tarefa a usuário
- `generateTaskCode(projectKey)` - Gera código único para tarefa
- `findTaskByCode(code)` - Busca tarefa por código (ex: PROJ-123)

#### **Controle de Tempo:**
- `logWork(taskId, hours, comment)` - Registra horas trabalhadas
- `calculateTimeMetrics(taskId)` - Calcula métricas de tempo

#### **Relatórios e Estatísticas:**
- `getProjectStats()` - Estatísticas gerais do projeto
- `getOverdueTasks()` - Tarefas em atraso
- `getTasksByUser(username)` - Tarefas por usuário
- `getProductivityReport(startDate, endDate)` - Relatório de produtividade
- `exportToCSV(type)` - Exporta dados para CSV

#### **Sistema de Notificações:**
- `getNotifications()` - Lista notificações do usuário
- `markNotificationAsRead(notificationId)` - Marca como lida

#### **Busca Avançada:**
- `searchTasks(criteria)` - Busca com múltiplos critérios

---

## 🧩 Estrutura esperada

Implemente todas as classes e métodos em:

````

tarefa3-todo-manager/todoManager.js

````

### Classes obrigatórias:
- `Task` - Representa uma tarefa
- `User` - Representa um usuário
- `ProjectStats` - Estatísticas do projeto
- `TodoManager` - Classe principal

### Enums obrigatórios:
- `TaskStatus` - Status das tarefas
- `Priority` - Prioridades das tarefas

---

## 💬 Regras de Negócio

### **Criação de Tarefas:**
- Título obrigatório (mínimo 3 caracteres)
- Usuário deve estar logado
- Data limite não pode ser no passado
- Tarefas urgentes não podem ter data limite muito distante (máximo 7 dias)
- **Código único gerado automaticamente** (formato: PROJ-123, TASK-456)
- Suporte a múltiplos projetos com diferentes prefixos

### **Transições de Status:**
- Apenas transições válidas são permitidas
- Tarefas urgentes não podem ser canceladas
- Tarefas concluídas não podem ser alteradas
- Mudança de status gera notificação

### **Atribuição de Tarefas:**
- Apenas managers e admins podem atribuir tarefas
- Usuário atribuído deve existir e estar ativo
- Não pode atribuir para si mesmo (exceto se for manager/admin)

### **Controle de Tempo:**
- Horas trabalhadas não podem ser negativas
- Tarefa deve estar em `in_progress` para registrar trabalho
- Total de horas não pode exceder 24h por dia por tarefa

### **Relatórios:**
- Apenas managers e admins podem gerar relatórios
- Dados devem ser calculados em tempo real
- Relatórios de produtividade consideram apenas tarefas concluídas

---

## 🧩 Dicas de Implementação

* **Organize as classes** de forma lógica (Task → User → ProjectStats → TodoManager)
* **Use validações robustas** em todos os métodos públicos
* **Implemente o padrão de transições** de status com validação
* **Considere casos edge** como usuários inativos, datas inválidas, etc.
* **Use arrays e objetos** de forma eficiente para filtros e buscas
* **Implemente notificações** para ações importantes (mudança de status, atribuição)

### 📝 Exemplo de estrutura de dados:

```js
const task = {
  id: 1,
  code: "PROJ-123", // Código único como no Jira
  title: "Implementar login",
  description: "Criar sistema de autenticação",
  status: TaskStatus.IN_PROGRESS,
  priority: Priority.HIGH,
  assignee: "joao.silva",
  dueDate: new Date("2024-12-31"),
  createdAt: new Date(),
  updatedAt: new Date(),
  completedAt: null,
  tags: ["frontend", "auth"],
  estimatedHours: 8,
  actualHours: 3
};
```

### 📝 Exemplo de uso dos códigos:

```js
// Buscar tarefa por código
const task = todoManager.findTaskByCode("PROJ-123");

// Criar tarefa em projeto específico
const newTask = todoManager.createTask(
  "Fix bug", 
  "Corrigir erro de validação", 
  Priority.HIGH, 
  "maria.santos", 
  new Date("2024-12-25"),
  "BUG" // Gera código BUG-456
);

// Listar tarefas por código
const tasks = todoManager.listTasks({
  code: "PROJ-*" // Filtra tarefas do projeto PROJ
});
```

---

## 🧪 Testes e Cobertura

Implemente testes unitários no arquivo `todoManager.test.js` para validar:

- Todas as classes e seus métodos
- Validações de entrada
- Transições de status
- Permissões de usuário
- Cálculos de estatísticas
- Casos de erro e exceções

**Executar testes:**
```bash
npm run test:tarefa3
```

**Gerar relatório de cobertura:**
```bash
npm test
```

A **cobertura de testes** será considerada na avaliação. Teste todos os cenários possíveis.

---

## 🧠 Critérios de Avaliação

| Critério                       | Descrição                                    |
| ------------------------------ | -------------------------------------------- |
| ⚙️ Funcionalidade completa     | Todas as classes e métodos implementados    |
| 🔄 Workflow de status          | Transições válidas e inválidas              |
| 👥 Sistema de usuários         | Roles, permissões e validações              |
| 📊 Relatórios e estatísticas   | Cálculos corretos e dados consistentes      |
| 🛡️ Validações e segurança     | Entradas validadas e permissões respeitadas |
| 🧹 Qualidade do código         | Código limpo, bem estruturado e documentado |
| 🧪 Cobertura de testes         | Testes abrangentes para todos os cenários   |
| 📈 Complexidade adequada       | Múltiplas classes e regras de negócio       |

````