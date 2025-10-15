# ♻️ Tarefa 2 - Refatoração de Código Legacy

## 🎯 Objetivo
Refatorar um código legacy complexo, transformando-o em uma solução limpa, modular, eficiente e de fácil manutenção.

---

## 📝 Descrição do Problema

### **Código Legacy Atual:**
O arquivo `legacyCode.js` contém uma classe `LegacyOrderProcessor` com 3 métodos principais:
- `processOrder()` - Processamento de pedidos com múltiplas regras
- `calculateOrderTotal()` - Cálculo de totais (código duplicado)
- `validateAndProcessOrder()` - Validação complexa com alta ciclomática

### **Problemas Identificados:**
1.  **Variáveis não utilizadas** (unusedVar1, unusedVar2, etc.)
2.  **Código morto** (if false, while false)
3.  **Expressões sempre verdadeiras** (if true || false)
4.  **Duplicação de código** entre métodos
5.  **Alta complexidade ciclomática** (muitos ifs aninhados)
6.  **Nomes de variáveis não descritivos** (temp1, temp2, var1, etc.)
7.  **Falta de validação de entrada**
8.  **Lógica de negócio misturada** com cálculos
9.  **Falta de constantes** para valores mágicos
10. **Aninhamento excessivo** de condicionais
11. **Falta de tratamento de erros**
12. **Responsabilidades misturadas** em uma única função/método
13. **Uso de `var`** em vez de `let` ou `const`
14. **Comparações frouxas** (`==` em vez de `===`)
15. **Objetos mutáveis** passados por referência sem cópia defensiva

## ✅ Requisitos obrigatórios

### 1. **Limpeza de Código**
- **Remover variáveis não utilizadas** e código morto
- **Eliminar duplicação de código** entre funções
- **Substituir `var` por `let` ou `const`**
- **Usar `===` em vez de `==`** para comparações
- **Simplificar condicionais aninhadas** e expressões complexas

### 2. **Organização e Estrutura**
- **Dividir funções grandes** em funções menores com responsabilidade única
- **Extrair constantes** para valores mágicos (descontos, taxas, etc.)
- **Separar lógica de negócio** dos cálculos
- **Criar funções auxiliares** para operações específicas
- **Organizar código** de forma lógica e legível

### 3. **Validação e Tratamento de Erros**
- **Adicionar validação robusta** de dados de entrada
- **Implementar tratamento de erros** adequado
- **Retornar mensagens de erro** descritivas
- **Validar parâmetros** antes do processamento

### 4. **Funcionalidade**
- **Manter a mesma funcionalidade** do código original
- **Processar pedidos** com todas as regras de negócio
- **Calcular totais** corretamente
- **Aplicar descontos e taxas** conforme especificado
- **Retornar resultados** no mesmo formato

### 5. **Qualidade**
- **Código limpo e legível**
- **Nomes descritivos** para variáveis e funções
- **Documentação** adequada (JSDoc)
- **Estrutura organizada** e manutenível

## 🧩 Estrutura esperada
O código deve ser refatorado no arquivo:

````
tarefa2-refactor-code/refactor-code.js
````

### **Estrutura obrigatória:**
- **Classe ou função principal** - deve implementar o processamento de pedidos
- **Funções auxiliares** - para cálculos específicos (subtotal, descontos, taxas)
- **Constantes** - para valores mágicos (descontos, taxas, custos de frete)
- **Validação de dados** - deve validar entradas e tratar erros
- **Mesma funcionalidade** - deve produzir os mesmos resultados do código original

---

## 🧪 Testes e Cobertura

Implemente testes unitários no arquivo `refactor-code.test.js` para validar:

### **5 Testes Essenciais:**
1.  ✅ **Cálculo de total simples** - pedido básico com 2 itens
2.  ✅ **Cálculo com descontos** - produtos + cliente PREMIUM + cupom SAVE20
3.  ✅ **Validação de dados** - pedido válido com todos os dados obrigatórios
4.  ✅ **Cenário completo** - usuário VIP + 3 itens + cupom + frete express + cartão
5.  ✅ **Tratamento de erros** - pedido inválido com múltiplos problemas

**Executar testes:**
```bash
npm run test:tarefa2
```

A **cobertura de testes** será considerada na avaliação da qualidade do código.

---

## 🧠 Critérios de Avaliação

| Critério               | Descrição                                   |
| ---------------------- | ------------------------------------------- |
| ✅ Funcionalidade       | Implementa a lógica de negócio corretamente |
| 🚀 Performance         | Solução eficiente (tempo e espaço)          |
| 🧹 Qualidade do código | Código limpo, legível e bem estruturado     |
| 🧪 Cobertura de testes | Testes abrangentes com boa cobertura        |