# ✅ Tarefa 3 - Gerenciador de Tarefas (Simples)

## 🎯 Objetivo
Implementar um **gerenciador de tarefas** em JavaScript orientado a objetos.  
A classe `TodoManager` deve oferecer métodos para login, criação, listagem, atualização e exclusão de tarefas.

---

## ✅ Requisitos obrigatórios

1. **Login**
   - Método: `login(username, password)`
   - Usuário padrão:
     ```js
     { username: "admin", password: "1234" }
     ```
   - Retorna `true` em caso de sucesso  
   - Lança erro se as credenciais forem inválidas

2. **Criação de tarefa**
   - Método: `createTask(title, description)`
   - Deve lançar erro se o título estiver vazio
   - Atribui ID incremental automático
   - Retorna o objeto da tarefa criada

3. **Listagem**
   - Método: `listTasks(page, limit)`
   - Retorna lista paginada das tarefas (5 por padrão)

4. **Atualização**
   - Método: `updateTask(id, data)`
   - Atualiza título e descrição
   - Lança erro se o ID não existir

5. **Remoção**
   - Método: `deleteTask(id)`
   - Exclui tarefa existente
   - Lança erro se o ID não existir

---

## 🧩 Estrutura esperada

O código deve estar em:
````

tarefa3-todo-manager/todoManager.js

````

A classe já está parcialmente implementada — complete os métodos conforme os requisitos.

---

## 🧪 Testes

Execute os testes automáticos com:

```bash
npm test tarefa3-todo-manager
````

Ou apenas os desta tarefa:

```bash
npx jest tarefa3-todo-manager --watch
```

---

## 🕒 Tempo estimado

⏱ **3 horas**

---

## 💬 Dicas

* Valide sempre o estado de login antes de manipular tarefas.
* Use arrays e métodos de array (`find`, `filter`, `slice`) de forma limpa.
* Organize os métodos em ordem lógica (login → CRUD → utilitários).

---

## 🧠 Critérios de Avaliação

| Critério               | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| ⚙️ Funcionalidade      | Todos os métodos implementados corretamente |
| 🧩 Estrutura OO        | Classe bem organizada e coesa               |
| 🧹 Qualidade do código | Código legível e limpo                      |
| 🧪 Testes              | Todos os testes passam                      |
