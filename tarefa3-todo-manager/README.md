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

## 🕒 Tempo estimado

⏱ **3 horas**

---

## 💬 Dicas

* Valide sempre o estado de login antes de manipular tarefas.
* Use arrays e métodos de array (`find`, `filter`, `slice`) de forma limpa.
* Organize os métodos em ordem lógica (login → CRUD → utilitários).

---

## 🧪 Testes e Cobertura

Implemente testes unitários no arquivo `todoManager.test.js` para validar todos os métodos da classe.

**Executar testes:**
```bash
npm run test:tarefa3
```

**Gerar relatório de cobertura:**
```bash
npm test
```

A **cobertura de testes** será considerada na avaliação. Teste todos os métodos e cenários (sucesso e erro).

---

## 🧠 Critérios de Avaliação

| Critério               | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| ⚙️ Funcionalidade      | Todos os métodos implementados corretamente |
| 🧩 Estrutura OO        | Classe bem organizada e coesa               |
| 🧹 Qualidade do código | Código legível e limpo                      |
| 🧪 Cobertura de testes | Testes completos para todos os métodos      |
