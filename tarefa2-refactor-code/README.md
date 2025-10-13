# 🔧 Tarefa 2 - Refatoração de Código Legado

## 🎯 Objetivo
Melhorar a qualidade de um código legado propositalmente ruim **sem alterar seu comportamento**.  
Todos os testes existentes devem continuar passando após a refatoração.

---

## 📄 Código base

O arquivo `legacyCode.js` contém uma função `calc()` que **calcula o preço final de uma compra** considerando:
- Preço base dos produtos (preço × quantidade)
- Desconto por tipo de cliente (VIP, GOLD, SILVER, REGULAR)
- Desconto por cupom promocional (PROMO10, PROMO20, PROMO30)
- Valor do frete baseado no subtotal

### ⚠️ Problemas identificados no código:

1. **Nomes de variáveis ruins**: `p`, `q`, `t`, `c`, `r`, `d`, `f`
2. **Falta de validação**: não verifica entradas inválidas
3. **Estrutura confusa**: muitos `if/else` encadeados
4. **Falta de modularização**: tudo em uma única função
5. **Uso de `==` ao invés de `===`**
6. **Magic numbers**: valores fixos sem constantes (0.2, 0.15, 15, 10, etc.)
7. **Falta de documentação**: difícil entender o propósito

Seu desafio é **refatorar esse código** mantendo o mesmo resultado da função.

---

## ✅ Requisitos obrigatórios

1. **Melhorar nomes de variáveis e funções**
   - Usar nomes descritivos: `prices`, `quantities`, `customerType`, `couponCode`, `totalPrice`
   - Renomear a função `calc()` para algo mais significativo

2. **Extrair funções auxiliares**
   - Criar funções separadas para cada responsabilidade:
     - Cálculo do preço base
     - Aplicação de desconto por tipo de cliente
     - Aplicação de cupom
     - Cálculo de frete

3. **Substituir magic numbers por constantes**
   - Criar constantes para descontos, valores de frete, etc.
   - Exemplo: `const VIP_DISCOUNT = 0.2`

4. **Adicionar validação de entradas**
   - Verificar se arrays não estão vazios
   - Validar tipo de cliente
   - Validar cupom (se fornecido)

5. **Melhorar estrutura**
   - Usar objetos/maps ao invés de múltiplos `if/else`
   - Usar `===` ao invés de `==`

6. **Preservar comportamento**
   - O resultado final deve ser idêntico ao código original

---

## 🧩 Estrutura esperada
Implemente o código refatorado em:

````

tarefa2-refactor-code/refactor.js

````

Não altere o arquivo `legacyCode.js`, apenas use-o como referência.

---

## 🕒 Tempo estimado

⏱ **2 horas**

---

## 💬 Dicas

* **Entenda o código primeiro**: Leia com atenção para entender o comportamento esperado
* **Refatore em pequenos passos**: Mude uma coisa por vez
* **Use funções auxiliares pequenas**: Cada função deve ter uma única responsabilidade
* **Prefira objetos a if/else**: `const discounts = { VIP: 0.2, GOLD: 0.15, ... }`
* **Nomes claros > comentários**: Um bom nome dispensa explicações

### 📝 Exemplo de melhoria:

**Antes:**
```js
let d = 0;
if (t == "VIP") {
  d = r * 0.2;
}
```

**Depois:**
```js
const CUSTOMER_DISCOUNTS = {
  VIP: 0.2,
  GOLD: 0.15,
  SILVER: 0.1,
  REGULAR: 0.05
};

function calculateCustomerDiscount(subtotal, customerType) {
  const discountRate = CUSTOMER_DISCOUNTS[customerType] || 0;
  return subtotal * discountRate;
}
```

---

## 🧪 Testes e Cobertura

Implemente testes no arquivo `refactor.test.js` para garantir que o código refatorado mantém o mesmo comportamento do código legado.

**Executar testes:**
```bash
npm run test:tarefa2
```

**Gerar relatório de cobertura:**
```bash
npm test
```

A **cobertura de testes** será considerada na avaliação. Garanta que o código refatorado está bem testado.

---

## 🧠 Critérios de Avaliação

| Critério                       | Descrição                          |
| ------------------------------ | ---------------------------------- |
| 🔁 Redução de duplicação       | Código sem repetições              |
| 🧩 Legibilidade                | Estrutura clara e bem nomeada      |
| 🧱 Manutenção de comportamento | Comportamento idêntico ao original |
| 🧪 Cobertura de testes         | Testes que validam a refatoração   |
| 🧹 Qualidade geral             | Organização e boas práticas        |

````
