# 🔗 Tarefa 1 - Valid Parentheses

## 🎯 Objetivo
Dada uma string contendo apenas os caracteres `'('`, `')'`, `'{'`, `'}'`, `'['` e `']'`, determine se a string de entrada é **válida**.

Este é um problema **intuitivo** e **visual** que qualquer pessoa pode entender - perfeito para comparar **experiência** vs **ferramenta** sem barreiras de conhecimento.

**Categoria:** String, Stack  

---

## 📝 Descrição do Problema

### **Regras para string válida:**
1. **Parênteses abertos** devem ser fechados pelo **mesmo tipo**
2. **Parênteses abertos** devem ser fechados na **ordem correta**
3. Cada parêntese fechado tem um parêntese aberto correspondente do mesmo tipo

### **Exemplos:**

**✅ Válidas:**
```
Input: s = "()"
Output: true

Input: s = "()[]{}"
Output: true

Input: s = "{[]}"
Output: true
```

**❌ Inválidas:**
```
Input: s = "(]"
Output: false

Input: s = "([)]"
Output: false

Input: s = "((("
Output: false
```

### **Explicação Visual:**

```
✅ "()"     → ( abre, ) fecha → VÁLIDA
✅ "()[]{}" → ( ) [ ] { } → VÁLIDA
✅ "{[]}"   → { [ ] } → VÁLIDA

❌ "(]"     → ( abre, ] fecha tipo errado → INVÁLIDA
❌ "([)]"   → ( [ ) ] → ordem errada → INVÁLIDA
❌ "((("    → 3 abertos, 0 fechados → INVÁLIDA
```

---

## ✅ Requisitos obrigatórios

### 1. **Função Principal**
- `isValid(s)` - Verifica se a string é válida

### 2. **Função Auxiliar**
- `findFirstError(s)` - Encontra o primeiro erro

---

## 🧩 Estrutura esperada

Implemente as funções em:

````

tarefa1-validate-user/validateUser.js

````

### **Funções obrigatórias:**
- `isValid()` - Verificação de parênteses válidos
- `findFirstError()` - Detecção de primeiro erro

---

## 💡 Dicas Gerais

- **Pense em uma pilha**: Parênteses abertos vão para a pilha
- **Verifique fechamentos**: Cada fechamento deve corresponder ao último aberto
- **Considere casos extremos**: String vazia, string com 1 caractere
- **Otimize**: Use estruturas de dados eficientes
- **Debug**: Implemente findFirstError para ajudar

---

## 🧩 Exemplos de Uso

```javascript
// Casos básicos
console.log(isValid("()")); // true
console.log(isValid("()[]{}")); // true
console.log(isValid("{[]}")); // true

// Casos inválidos
console.log(isValid("(]")); // false
console.log(isValid("([)]")); // false
console.log(isValid("(((")); // false

// Encontrar erro
const error = findFirstError("([)]");
console.log(error.error); // "Parêntese '(' na posição 0 não corresponde ao fechamento ')' na posição 2"
```

---

## 🧪 Testes e Cobertura

Os testes já estão implementados no arquivo `validateUser.test.js` com **logs de performance** para medir o tempo de execução. Você só precisa implementar as funções!

### **Testes Implementados:**

#### **Testes para `isValid` (12 testes):**
- ✅ String vazia
- ✅ Parênteses simples `()`
- ✅ Múltiplos tipos `()[]{}`
- ✅ Parênteses aninhados `{[]}`
- ✅ Parênteses incompatíveis `(]`
- ✅ Ordem incorreta `([)]`
- ✅ Apenas abertura `(((`)
- ✅ Apenas fechamento `)))`
- ✅ String complexa válida `({[]})[{}]`
- ✅ String complexa inválida `({[}])[{}]`
- ✅ String longa válida (2000 caracteres)
- ✅ String longa inválida (1999 caracteres)

#### **Testes para `findFirstError` (7 testes):**
- ✅ String vazia
- ✅ String válida
- ✅ Parêntese fechado sem abertura `)`
- ✅ Tipo incompatível `(]`
- ✅ Parêntese não fechado `(((`)
- ✅ Primeiro erro em string complexa
- ✅ String longa com erro

#### **Testes de Performance (2 testes):**
- ✅ String muito longa (6000 caracteres) - deve ser < 100ms
- ✅ Encontrar erro em string longa (9999 caracteres) - deve ser < 100ms

#### **Testes de Edge Cases (3 testes):**
- ✅ String com 1 caractere
- ✅ Caracteres misturados
- ✅ Padrão repetitivo

**Executar testes:**
```bash
npm run test:tarefa1
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
| ✅ Implementação correta       | Funções retornam resultados corretos         |
| ✅ Algoritmo eficiente         | Implementação otimizada (O(n))               |
| ✅ Tratamento de bordas        | Casos extremos e edge cases                  |
| ✅ Detecção de erros           | Função para encontrar primeiro erro          |
| ✅ Debugging                   | Código que funciona em casos complexos       |
| 🧹 Qualidade do código         | Código limpo e bem documentado               |
| 🧪 Cobertura de testes         | Testes abrangentes para todos os cenários   |

---

## 📚 Referências

- [LeetCode 20 - Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)
- [Stack Data Structure](https://www.geeksforgeeks.org/stack-data-structure/)

````