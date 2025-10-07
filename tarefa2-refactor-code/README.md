# 🔧 Tarefa 2 - Refatoração de Código Legado

## 🎯 Objetivo
Melhorar a qualidade de um código legado propositalmente ruim **sem alterar seu comportamento**.  
Todos os testes existentes devem continuar passando após a refatoração.

---

## 📄 Código base

O arquivo `legacyCode.js` contém uma função com:
- Alta complexidade ciclomática
- Código duplicado
- Variáveis sem significado (`a`, `b`, `x`, `temp`)
- Falta de tratamento de erros
- Ausência de boas práticas de estrutura e nomeação

Seu desafio é **refatorar esse código** mantendo o mesmo resultado da função.

---

## ✅ Requisitos obrigatórios

1. **Eliminar duplicações**
   - Consolidar blocos repetidos em funções reutilizáveis

2. **Melhorar nomes**
   - Renomear variáveis e funções para refletir seu propósito

3. **Adicionar tratamento de erros**
   - Evitar falhas por entradas inválidas

4. **Melhorar legibilidade**
   - Usar estrutura clara, modular e comentários explicativos

5. **Preservar comportamento**
   - Todos os testes em `tests/refactor.test.js` devem continuar passando

---

## 🧩 Estrutura esperada
Implemente o código refatorado em:

````

tarefa2-refactor-code/refactor.js

````

Não altere o arquivo `legacyCode.js`, apenas use-o como referência.

---

## 🧪 Testes
Execute os testes automáticos com:

```bash
npm test tarefa2-refactor-code
````

Ou apenas os desta tarefa:

```bash
npx jest tarefa2-refactor-code --watch
```

---

## 🕒 Tempo estimado

⏱ **2 horas**

---

## 💬 Dicas

* Use funções auxiliares pequenas.
* Evite mutações desnecessárias.
* Prefira nomes claros a comentários extensos.
* Priorize clareza em vez de "otimizações".

---

## 🧠 Critérios de Avaliação

| Critério                       | Descrição                          |
| ------------------------------ | ---------------------------------- |
| 🔁 Redução de duplicação       | Código sem repetições              |
| 🧩 Legibilidade                | Estrutura clara e bem nomeada      |
| 🧱 Manutenção de comportamento | Todos os testes continuam passando |
| 🧹 Qualidade geral             | Organização e boas práticas        |

````
