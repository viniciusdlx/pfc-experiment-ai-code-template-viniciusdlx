# 🧪 Tarefa 1 - Validação de Formulário

## 🎯 Objetivo
Implementar uma função que valide os dados de um usuário conforme regras específicas.  
O sistema deve receber um objeto com as propriedades `email`, `cpf`, `password` e `birthDate`, e retornar um objeto com `status` e `messages`.

---

## ✅ Requisitos obrigatórios

A função `validateUser(user)` deve validar:

1. **Email válido**
   - Deve seguir o formato padrão: `nome@dominio.com`

2. **CPF válido**
   - Deve implementar o algoritmo de verificação de dígitos
   - CPFs com todos os dígitos iguais são inválidos

3. **Senha**
   - Mínimo de **8 caracteres**
   - Deve conter **1 letra maiúscula**
   - Deve conter **1 número**
   - Deve conter **1 caractere especial**

4. **Data de nascimento**
   - O usuário deve ter **18 anos ou mais**

5. **Tratamento de erros**
   - Retornar um objeto:
     ```js
     {
       status: "success" | "error",
       messages: ["mensagem1", "mensagem2", ...]
     }
     ```

---

## 🧩 Estrutura esperada
O código deve ser implementado no arquivo:

````

tarefa1-validate-user/validateUser.js

````

---

## 🧪 Testes
Execute os testes automáticos com:

```bash
npm test tarefa1-validate-user
````

Você pode rodar apenas os testes dessa tarefa:

```bash
npx jest tarefa1-validate-user --watch
```

---

## 🕒 Tempo estimado

⏱ **1 hora e 30 minutos**

---

## 💬 Dicas

* Teste cada regra separadamente antes de juntar tudo.
* Use funções auxiliares pequenas e reutilizáveis.
* Valide os casos de borda (CPF repetido, datas extremas, etc.).

---

## 🧠 Critérios de Avaliação

| Critério               | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| ✅ Funcionalidade       | Implementa todas as validações corretamente |
| 🧹 Qualidade do código | Código limpo, legível e bem estruturado     |
| 🧪 Testes              | Todos os testes passam com sucesso          |
| ⏱ Produtividade        | Tempo de conclusão dentro do estimado       |

````
