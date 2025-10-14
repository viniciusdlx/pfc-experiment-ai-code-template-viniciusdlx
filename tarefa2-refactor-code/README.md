# 🔧 Tarefa 2 - Refatoração de Código Legacy

## 🎯 Objetivo
Refatore o código legacy fornecido em `legacyCode.js`, transformando-o em código limpo, legível e manutenível seguindo as melhores práticas de desenvolvimento.

O código atual é um **sistema de e-commerce** com múltiplas regras de negócio complexas que possui diversos problemas de qualidade e manutenibilidade.

**Categoria:** Refactoring, Clean Code, Design Patterns  

---

## 📝 Descrição do Problema

### **Código Legacy Atual:**
O arquivo `legacyCode.js` contém uma classe `LegacyOrderProcessor` com 3 métodos principais:
- `processOrder()` - Processamento de pedidos com múltiplas regras
- `calculateOrderTotal()` - Cálculo de totais (código duplicado)
- `validateAndProcessOrder()` - Validação complexa com alta ciclomática

### **Problemas Identificados:**
1. **Variáveis não utilizadas** (unusedVar1, unusedVar2, etc.)
2. **Código morto** (if false, while false)
3. **Expressões sempre verdadeiras** (if true || false)
4. **Duplicação de código** entre funções
5. **Alta complexidade ciclomática** (muitos ifs aninhados)
6. **Nomes de variáveis não descritivos** (temp1, temp2, var1, etc.)
7. **Falta de validação de entrada**
8. **Lógica de negócio misturada** com cálculos
9. **Falta de constantes** para valores mágicos
10. **Aninhamento excessivo** de condicionais
11. **Falta de tratamento de erros**
12. **Responsabilidades misturadas** em uma única função

---

## ✅ Requisitos obrigatórios

### 1. **Refatoração Estrutural**
- **Extrair constantes** para valores mágicos (descontos, taxas, etc.)
- **Criar funções auxiliares** para cálculos específicos
- **Separar responsabilidades** em funções menores
- **Eliminar duplicação** de código

### 2. **Melhorias de Qualidade**
- **Remover variáveis não utilizadas**
- **Eliminar código morto**
- **Simplificar expressões condicionais**
- **Melhorar nomes de variáveis e funções**
- **Adicionar validação de entrada**

### 3. **Organização do Código**
- **Criar classes ou módulos** para organizar funcionalidades
- **Implementar padrões de design** apropriados
- **Adicionar tratamento de erros**
- **Documentar funções** com JSDoc

---

## 🧩 Estrutura esperada

Refatore o código em:

````

tarefa2-refactor-code/legacyCode.js

````

### **Funcionalidades obrigatórias:**
- **Processamento de pedidos** limpo e organizado
- **Cálculo de totais** sem duplicação
- **Validação de dados** robusta
- **Constantes** para valores mágicos
- **Métodos auxiliares** bem definidos
- **Tratamento de erros** adequado
- **Refatoração da classe** em estrutura mais limpa

---

## 💡 Dicas de Refatoração

### **1. Identifique Responsabilidades:**
- Cálculo de subtotal
- Aplicação de descontos
- Cálculo de impostos
- Cálculo de frete
- Validação de dados
- Processamento de pagamento

### **2. Extraia Constantes:**
```javascript
const DISCOUNT_RATES = {
  VIP: 0.15,
  GOLD: 0.10,
  SILVER: 0.05,
  BRONZE: 0.02
};

const SHIPPING_COSTS = {
  EXPRESS: 25,
  STANDARD: 15,
  ECONOMY: 8,
  PICKUP: 0
};
```

### **3. Crie Métodos Auxiliares:**
```javascript
class OrderProcessor {
  calculateSubtotal(items) {
    // Implementar cálculo de subtotal
  }

  applyUserDiscount(subtotal, userType) {
    // Implementar desconto por tipo de usuário
  }

  calculateShipping(shippingType) {
    // Implementar cálculo de frete
  }
}
```

### **4. Use Early Returns:**
```javascript
function validateOrder(order) {
  if (!order) return { isValid: false, error: 'Pedido não informado' };
  if (!order.items || order.items.length === 0) return { isValid: false, error: 'Pedido sem itens' };
  
  // Validações adicionais...
  return { isValid: true };
}
```

### **5. Implemente Classes:**
```javascript
class OrderProcessor {
  constructor() {
    this.discountRates = DISCOUNT_RATES;
    this.shippingCosts = SHIPPING_COSTS;
  }
  
  processOrder(orderData, userInfo, paymentInfo, shippingInfo, promoInfo) {
    // Implementar processamento
  }
}
```

---

## 🧩 Exemplos de Uso

```javascript
// Exemplo de uso do código refatorado
const orderProcessor = new OrderProcessor();

const orderData = {
  items: [
    { id: 1, price: 100, quantity: 2 },
    { id: 2, price: 50, quantity: 1 }
  ]
};

const userInfo = { type: 'VIP', state: 'CA' };
const paymentInfo = { method: 'CREDIT_CARD' };
const shippingInfo = { type: 'STANDARD' };
const promoInfo = { code: 'SAVE10' };

const result = orderProcessor.processOrder(orderData, userInfo, paymentInfo, shippingInfo, promoInfo);
console.log('Total:', result.total);
console.log('Breakdown:', result.breakdown);
```

---

## 🧪 Testes e Cobertura

Implemente testes unitários no arquivo `refactor.test.js` para validar:

### **5 Testes Essenciais:**
1. ✅ **Cálculo de total simples** - pedido básico com 2 itens
2. ✅ **Cálculo com descontos** - produtos + cliente PREMIUM + cupom SAVE20
3. ✅ **Validação de dados** - pedido válido com todos os dados obrigatórios
4. ✅ **Cenário completo** - usuário VIP + 3 itens + cupom + frete express + cartão
5. ✅ **Tratamento de erros** - pedido inválido com múltiplos problemas

**Executar testes:**
```bash
npm run test:tarefa2
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
| ✅ Funcionalidade              | Código refatorado funciona corretamente      |
| ✅ Eliminação de problemas     | Remove variáveis não utilizadas, código morto |
| ✅ Organização                 | Código bem estruturado e organizado          |
| ✅ Constantes                  | Valores mágicos extraídos para constantes    |
| ✅ Funções auxiliares          | Responsabilidades separadas em funções       |
| ✅ Eliminação de duplicação    | Código duplicado removido ou consolidado     |
| ✅ Tratamento de erros         | Validação e tratamento de erros implementado |
| ✅ Documentação                | Funções documentadas com JSDoc               |
| ✅ Nomes descritivos           | Variáveis e funções com nomes claros         |
| ✅ Complexidade reduzida       | Complexidade ciclomática reduzida            |
| 🧹 Qualidade do código         | Código limpo e seguindo boas práticas        |
| 🧪 Cobertura de testes         | Testes abrangentes para todos os cenários   |

---

## 🎯 Por que é PERFEITO para o experimento:

### **🤖 IA vai ter DIFICULDADE:**
- **Análise de contexto**: IA pode não entender todas as regras de negócio
- **Refatoração complexa**: Pode fazer mudanças superficiais sem melhorar estrutura
- **Padrões de design**: Pode não aplicar padrões apropriados
- **Validação**: Pode não implementar validação robusta

### **👨‍💻 Senior resolve com EXPERIÊNCIA:**
- **Reconhece padrões**: Sabe quando aplicar refatorações específicas
- **Estrutura**: Organiza código de forma lógica e manutenível
- **Validação**: Implementa validação robusta e tratamento de erros
- **Padrões**: Aplica padrões de design apropriados

### **👶 Qualquer pessoa pode entender:**
- **Problemas visíveis**: Fácil de identificar problemas no código
- **Objetivo claro**: Refatorar para melhorar qualidade
- **Resultado mensurável**: Código antes vs depois

---

## 📚 Referências

- [Clean Code - Robert Martin](https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882)
- [Refactoring - Martin Fowler](https://refactoring.com/)
- [JavaScript Best Practices](https://github.com/airbnb/javascript)

````