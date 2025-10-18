console.log("Início Tarefa 2 - SEM IA");

// Entities
/**
 * @typedef {Object} Order
 * @property {Item[]} items
 */

/**
 * @typedef {Object} Item
 * @property {Number} id
 * @property {Number} quantity
 * @property {Number} price
 */

/**
 * @typedef {Object} User
 * @property {Number} id
 * @property {string} email
 * @property {string} address
 * @property {string} type
 * @property {string} state
 */

/**
 * @typedef {Object} Inventory
 * @property {Function} checkStock
 */

/**
 * @typedef {Object} Payment
 * @property {string} method
 * @property {Number} amount
 */

/**
 * @typedef {Object} Shipping
 * @property {string} type
 */

/**
 * @typedef {Object} Promo
 * @property {string} code
 */

/**
 * @typedef {Object} Error
 * @property {string} message
 * @property {string} code
 */

/**
 * Functions Props
 * @typedef {Object} ValidateOrderData
 * @property {Order} order
 * @property {Inventory} inventory
 * @property {Error[]} errors

 * @typedef {Object} ValidateUserData
 * @property {User} user
 * @property {Error[]} errors

 * @typedef {Object} ValidatePaymentData
 * @property {Payment} payment
 * @property {Error[]} errors

 * @typedef {Object} ValidateAndProcessOrder
 * @property {Order} order
 * @property {User} user
 * @property {Payment} payment
 * @property {Shipping} shipping
 * @property {Promo} promo
 * @property {Inventory} inventory
 * @property {Error[]} errors
 */

const validPaymentMethods = [
  "CREDIT_CARD",
  "DEBIT_CARD",
  "PAYPAL",
  "BANK_TRANSFER",
  "CRYPTO",
];

const paymentFeeRates = {
  CREDIT_CARD: 0.029,
  DEBIT_CARD: 0.015,
  PAYPAL: 0.034,
  BANK_TRANSFER: 0,
  CRYPTO: 0.01,
};

const stateTaxesRate = {
  CA: 0.0875,
  NY: 0.08,
  TX: 0.0625,
  FL: 0,
  OTHER: 0.05,
};

const shippingValues = {
  EXPRESS: 25,
  STANDARD: 15,
  ECONOMY: 8,
  PICKUP: 0,
};

const promoDiscountRate = {
  SAVE10: 0.1,
  SAVE20: 0.2,
  SAVE30: 0.3,
  SAVE50: 0.5,
  FREESHIP: 0,
  BOGO: 0.5,
};

const userTypeDiscountRate = {
  VIP: 0.15,
  GOLD: 0.1,
  SILVER: 0.05,
  BRONZE: 0.02,
  REGULAR: 0,
};

class LegacyOrderProcessor {
  processOrder({ orderData, userInfo, paymentInfo, shippingInfo, promoInfo }) {
    var total = 0;
    let subtotal = 0;
    var tax = 0;
    var shipping = 0;
    var discount = 0;
    var finalTotal = 0;
    var temp1 = 0;
    var temp2 = 0;
    var temp3 = 0;
    var unusedVar1 = "não usado";
    var unusedVar2 = 123;
    var unusedVar3 = true;

    if (orderData != null) {
      if (orderData.items != null) {
        if (orderData.items.length > 0) {
          for (var i = 0; i < orderData.items.length; i++) {
            var item = orderData.items[i];
            if (item != null) {
              if (item.price != null) {
                if (item.quantity != null) {
                  if (item.price > 0) {
                    if (item.quantity > 0) {
                      subtotal = subtotal + item.price * item.quantity;
                    }
                  }
                }
              }
            }
          }
        }
      }
    }

    if (userInfo != null) {
      if (userInfo.type != null) {
        if (userInfo.type == "VIP") {
          discount = subtotal * 0.15;
        } else if (userInfo.type == "GOLD") {
          discount = subtotal * 0.1;
        } else if (userInfo.type == "SILVER") {
          discount = subtotal * 0.05;
        } else if (userInfo.type == "BRONZE") {
          discount = subtotal * 0.02;
        } else if (userInfo.type == "REGULAR") {
          discount = 0;
        } else {
          discount = 0;
        }
      }
    }

    if (promoInfo != null) {
      if (promoInfo.code != null) {
        if (promoInfo.code == "SAVE10") {
          discount = discount + subtotal * 0.1;
        } else if (promoInfo.code == "SAVE20") {
          discount = discount + subtotal * 0.2;
        } else if (promoInfo.code == "SAVE30") {
          discount = discount + subtotal * 0.3;
        } else if (promoInfo.code == "SAVE50") {
          discount = discount + subtotal * 0.5;
        } else if (promoInfo.code == "FREESHIP") {
          shipping = 0;
        } else if (promoInfo.code == "BOGO") {
          discount = discount + subtotal * 0.5;
        }
      }
    }

    if (shippingInfo != null) {
      if (shippingInfo.type != null) {
        if (shippingInfo.type == "EXPRESS") {
          shipping = 25;
        } else if (shippingInfo.type == "STANDARD") {
          shipping = 15;
        } else if (shippingInfo.type == "ECONOMY") {
          shipping = 8;
        } else if (shippingInfo.type == "PICKUP") {
          shipping = 0;
        }
      }
    }

    if (userInfo != null) {
      if (userInfo.state != null) {
        if (userInfo.state == "CA") {
          tax = (subtotal - discount) * 0.0875;
        } else if (userInfo.state == "NY") {
          tax = (subtotal - discount) * 0.08;
        } else if (userInfo.state == "TX") {
          tax = (subtotal - discount) * 0.0625;
        } else if (userInfo.state == "FL") {
          tax = 0;
        } else {
          tax = (subtotal - discount) * 0.05;
        }
      }
    }

    var paymentFee = 0;
    if (paymentInfo != null) {
      if (paymentInfo.method != null) {
        if (paymentInfo.method == "CREDIT_CARD") {
          paymentFee = (subtotal - discount) * 0.029;
        } else if (paymentInfo.method == "DEBIT_CARD") {
          paymentFee = (subtotal - discount) * 0.015;
        } else if (paymentInfo.method == "PAYPAL") {
          paymentFee = (subtotal - discount) * 0.034;
        } else if (paymentInfo.method == "BANK_TRANSFER") {
          paymentFee = 0;
        } else if (paymentInfo.method == "CRYPTO") {
          paymentFee = (subtotal - discount) * 0.01;
        }
      }
    }

    if (true || false) {
      var alwaysTrue = 1;
      var anotherVar = 2;
      anotherVar = anotherVar * 3;
      anotherVar = anotherVar + 5;
    }

    finalTotal = subtotal - discount + tax + shipping + paymentFee;

    if (finalTotal < 0) {
      finalTotal = 0;
    }

    finalTotal = Math.round(finalTotal * 100) / 100;

    var unused1 = finalTotal;
    var unused2 = finalTotal * 2;
    var unused3 = finalTotal / 2;

    return finalTotal;
  }

  /**
   *
   * @param {ValidateOrderData} props
   */
  validateOrderData({ order, inventory, errors }) {
    if (!order || order?.items.length <= 0) {
      errors.push({
        message: "Pedido inválido, verifique se há itens!",
        code: "INVALID_ORDER",
      });
    }

    if (!!order && !!order.items.length > 0) {
      const { items } = order;

      items.forEach((item) => {
        if (item.quantity <= 0 || item.price <= 0) {
          errors.push({
            message: `Verifique se a quantidade e o preço informado do item #${item.id} estão corretos!`,
            code: "INVALID_ITEM_INFO",
          });
        }

        if (!inventory.checkStock(item.id, item.quantity)) {
          errors.push({
            message: `Item #${item.id} não está disponível!`,
            code: "ITEM_NOT_AVAILABLE",
          });
        }
      });
    }
  }

  /**
   *
   * @param {ValidateUserData} props
   */
  validateUserData({ user, errors }) {
    if (!user || !user.id) {
      errors.push({
        message: "Usuário inválido!",
        code: "INVALID_USER",
      });
    }

    if (!user.email) {
      errors.push({
        message: "Email do usuário não informádo!",
        code: "INVALID_USER_EMAIL",
      });
    }

    if (!user.address) {
      errors.push({
        message: "Endereço do usuário não informádo!",
        code: "INVALID_USER_ADDRESS",
      });
    }
  }

  /**
   *
   * @param {ValidatePaymentData} props
   */
  validatePaymentData({ payment, errors }) {
    if (!payment) {
      errors.push({
        message: "Pagamento não informado!",
        code: "INVALID_PAYMENT",
      });
    }

    if (!payment.method || !validPaymentMethods.includes([payment.method])) {
      errors.push({
        message: "Método de pagamento inválido ou não informado!",
        code: "INVALID_PAYMENT_METHOD",
      });
    }

    if (!payment.amount || payment.amount <= 0) {
      errors.push({
        message: "Valor do pagamento inválido ou não informado!",
        code: "INVALID_PAYMENT_AMOUNT",
      });
    }
  }

  /**
   *
   * @param {ValidateAndProcessOrder} props
   */
  validateAndProcessOrder({
    order,
    user,
    payment,
    shipping,
    promo,
    inventory,
  }) {
    const errors = [];

    Promise.all([
      this.validateOrderData({ order, inventory, errors }),
      this.validateUserData({ user, errors }),
      this.validatePaymentData({ payment, errors }),
    ]);

    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    const result = this.processOrder({
      orderData: order,
      userInfo: user,
      paymentInfo: payment,
      shippingInfo: shipping,
      promoInfo: promo,
    });

    return result;
  }
}

module.exports = { LegacyOrderProcessor };
