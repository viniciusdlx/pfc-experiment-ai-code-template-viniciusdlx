# 🔗 Tarefa 1 - Valid Parentheses

## 🎯 Objetivo
Implementar funções para validar e encontrar erros em strings de parênteses.

## 📄 Descrição do Problema

Dada uma string `s` contendo apenas os caracteres '(', ')', '{', '}', '[' e ']', determine se a string de entrada é válida.

Uma string de entrada é válida se:
1. Parênteses abertos devem ser fechados pelo mesmo tipo.
2. Parênteses abertos devem ser fechados na ordem correta.
3. Cada parêntese fechado tem um parêntese aberto correspondente do mesmo tipo.

**Exemplo 1:**
```
Input: s = "()"
Output: true
```

**Exemplo 2:**
```
Input: s = "()[]{}"
Output: true
```

**Exemplo 3:**
```
Input: s = "(]"
Output: false
```

**Exemplo 4:**
```
Input: s = "({[()]})"
Output: true
```

**Exemplo 5:**
```
Input: s = "({[}])"
Output: false
```

## ✅ Requisitos obrigatórios

### 1. **Validação de Parênteses**
- **Verificar se string é válida** - todos os parênteses devem ser fechados corretamente
- **Validar tipos de parênteses** - cada abertura deve ter fechamento do mesmo tipo
- **Validar ordem** - parênteses devem ser fechados na ordem correta
- **Retornar resultado booleano** - true se válida, false se inválida

### 2. **Detecção de Erros**
- **Encontrar primeiro erro** - identificar onde está o problema
- **Descrever o erro** - explicar qual é o problema encontrado
- **Indicar posição** - mostrar onde está o erro na string
- **Retornar objeto detalhado** - com informações sobre o erro ou validação

### 3. **Performance**
- **Solução eficiente** - deve processar strings longas rapidamente
- **Complexidade otimizada** - usar estrutura de dados apropriada
- **Tempo de execução** - deve ser rápido mesmo com strings grandes

## 🧩 Estrutura esperada
O código deve ser implementado no arquivo:

````
tarefa1-leetcode/leetcode.js
````

### **Estrutura obrigatória:**
- **Função de validação** - deve verificar se string de parênteses é válida
- **Função de detecção de erros** - deve encontrar e descrever o primeiro erro
- **Estrutura de dados eficiente** - deve usar abordagem otimizada para performance
- **Tratamento de casos extremos** - deve lidar com strings vazias, longas, etc.

---

## 💡 Dicas

*   Este problema pode ser resolvido eficientemente usando uma **estrutura de dados Stack (Pilha)**.
*   Ao encontrar um parêntese de abertura, adicione-o à pilha.
*   Ao encontrar um parêntese de fechamento, verifique se a pilha não está vazia e se o topo da pilha corresponde ao tipo de parêntese de fechamento. Se sim, remova o topo da pilha. Caso contrário, a string é inválida.
*   No final, se a pilha estiver vazia, a string é válida.

---

## 🧪 Testes e Cobertura

Os testes já estão implementados no arquivo `leetcode.test.js` com **logs de performance** para medir o tempo de execução. Você só precisa implementar as funções!

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

A **cobertura de testes** será considerada na avaliação da qualidade do código.

---

## 🧠 Critérios de Avaliação

| Critério               | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| ✅ Funcionalidade       | Implementa o algoritmo corretamente        |
| 🚀 Performance         | Solução eficiente (tempo e espaço)          |
| 🧹 Qualidade do código | Código limpo, legível e bem estruturado     |
| 🧪 Cobertura de testes | Testes abrangentes com boa cobertura        |