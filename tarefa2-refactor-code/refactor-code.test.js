const { LegacyOrderProcessor } = require("./refactor-code");

describe("Sistema de E-commerce - Refatoração", () => {
  let userInfo = {
    id: 2,
    email: "test@email.com",
    address: "Rua Teste, 123",
    type: "",
    level: "",
    state: "",
  };

  let promoInfo = {
    code: "",
  };

  let paymentInfo = {
    method: "CREDIT_CARD",
    amount: 100,
  };

  const shippingInfo = {
    type: "STANDARD",
  };

  const inventory = [
    { id: 1, quantity: 20, price: 10 },
    { id: 2, quantity: 20, price: 5 },
    { id: 3, quantity: 20, price: 25 },
    { id: 4, quantity: 3, price: 50 },
  ];

  // Implementar testes para processOrder
  test("deve calcular total correto para pedido simples", () => {
    // Testar: pedido com 2 itens, usuário VIP, pagamento cartão, frete padrão
    // Dados de entrada: orderData, userInfo, paymentInfo, shippingInfo, promoInfo
    // Resultado esperado: total calculado corretamente

    const orderProcessor = new LegacyOrderProcessor();

    const orderData = {
      items: [
        { id: 1, quantity: 2, price: 10 },
        { id: 2, quantity: 4, price: 5 },
      ],
    };

    userInfo.type = "VIP";

    const startTime = performance.now();
    const result = orderProcessor.processOrder({
      orderData,
      userInfo,
      paymentInfo,
      shippingInfo,
    });
    const endTime = performance.now();

    console.log(
      `total calculado (${result}): ${(endTime - startTime).toFixed(2)}ms`
    );

    expect(typeof result.finalTotal).toBe("number");
    expect(result.finalTotal).toBeLessThanOrEqual(paymentInfo.amount);
  });

  // Implementar testes para calculateOrderTotal
  test("deve calcular total com produtos e descontos", () => {
    // Testar: pedido com produtos, cliente PREMIUM, cupom SAVE20
    // Verificar: soma de produtos, desconto 20%, cupom aplicado

    const orderData = {
      items: [
        { id: 1, quantity: 2, price: 10 },
        { id: 2, quantity: 4, price: 5 },
      ],
    };

    userInfo.level = "PREMIUM";
    promoInfo.code = "SAVE20";

    const orderProcessor = new LegacyOrderProcessor();
    const startTime = performance.now();
    const result = orderProcessor.processOrder({
      orderData,
      userInfo,
      paymentInfo,
      shippingInfo,
      promoInfo,
    });
    const endTime = performance.now();

    console.log(
      `Soma dos produtos (R$ ${result.subTotal}): ${(
        endTime - startTime
      ).toFixed(2)}ms`
    );
    console.log(
      `Porcentagem de desconto aplicado: ${
        (result.discountPromoCode / result.subTotal) * 100
      }%`
    );

    expect(typeof result.subTotal).toBe("number");
    expect(result.discountPromoCode / result.subTotal).toBe(0.2);
    expect(typeof result.discountPromoCode).toBe("number");
    expect(result.appliedPromoCode).toBeTruthy();
  });

  // Implementar testes para validateAndProcessOrder
  test("deve validar pedido com dados corretos", () => {
    // Testar: pedido válido com todos os dados obrigatórios
    // Resultado esperado: isValid = true, sem erros

    const orderProcessor = new LegacyOrderProcessor();

    const orderData = {
      items: [
        { id: 1, quantity: 2, price: 10 },
        { id: 2, quantity: 4, price: 5 },
        { id: 3, quantity: 8, price: 25 },
      ],
    };

    userInfo.level = "PREMIUM";
    userInfo.type = "VIP";
    userInfo.state = "NY";
    promoInfo.code = "SAVE20";
    paymentInfo.method = "CREDIT_CARD";

    const startTime = performance.now();
    const result = orderProcessor.validateAndProcessOrder({
      order: orderData,
      user: userInfo,
      payment: paymentInfo,
      shipping: shippingInfo,
      promo: promoInfo,
      inventory: {
        checkStock: (itemId, quantity) => {
          console.log("itemId: ", itemId);
          const item = inventory.find((item) => item.id === itemId);

          if (item.quantity >= quantity) {
            return true;
          }

          return false;
        },
      },
    });
    const endTime = performance.now();
    console.log(
      `Result (${JSON.stringify(result)}): ${(endTime - startTime).toFixed(
        2
      )}ms`
    );

    expect(Array.isArray(result)).not.toBeTruthy();
    expect(!!result.totalDiscount).toBeTruthy();
  });

  // Teste de integração
  test("deve processar pedido completo VIP com cupom", () => {
    // Cenário: usuário VIP, pedido com 3 itens, cupom SAVE20, frete express, pagamento cartão
    // Verificar: todos os cálculos aplicados corretamente
  });

  // Teste de edge case
  test("deve lidar com pedido inválido", () => {
    // Testar: pedido sem itens, usuário sem dados, pagamento inválido
    // Resultado esperado: erros específicos para cada problema
  });
});
