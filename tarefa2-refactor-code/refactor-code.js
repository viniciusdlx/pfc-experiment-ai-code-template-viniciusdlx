console.log("Início Tarefa 2 - SEM IA");

/** Entities
 * 
 * @typedef {Object} Order
 * @property {Item[]} items

 * @typedef {Object} Item
 * @property {Number} id
 * @property {Number} quantity
 * @property {Number} price

 * @typedef {Object} User
 * @property {Number} id
 * @property {string} email
 * @property {string} address
 * @property {string} type
 * @property {string} state

 * @typedef {Object} Inventory
 * @property {Function} checkStock

 * @typedef {Object} Payment
 * @property {string} method
 * @property {Number} amount

 * @typedef {Object} Shipping
 * @property {string} type

 * @typedef {Object} Promo
 * @property {string} code

 * @typedef {Object} Error
 * @property {string} message
 * @property {string} code
 */

/** Functions Props
 * 
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
 * 
 * @typedef {Object} ProcessOrder
 * @property {Order} orderData
 * @property {User} userInfo
 * @property {Payment} paymentInfo
 * @property {Shipping} shippingInfo
 * @property {Promo} promoInfo
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
  calculateDiscountByTypeUser({ subTotal, userType }) {
    if (!userType) return 0;

    const rate = userTypeDiscountRate[userType];

    return subTotal * rate;
  }

  calculateDiscountByPromoCode({ discount, subTotal, code }) {
    if (!!code) {
      const rate = promoDiscountRate[code];
      if (rate !== "FREESHIP") {
        return discount + subTotal * rate;
      }
    }
    return discount;
  }

  calculateShippingByShippingType({ shippingType }) {
    if (!!shippingType) {
      return shippingValues[shippingType];
    }
  }

  calculateTaxByUserState({ subTotal, discount, state }) {
    if (!!state) {
      const rate = stateTaxesRate[state];
      if (rate === "FL") {
        return 0;
      }
      return (subTotal - discount) * rate;
    }
  }

  calculatePaymentFeeByPaymentMethod({ subTotal, discount, method }) {
    const rate = paymentFeeRates[method];
    if (rate === "BANK_TRANSFER") {
      return 0;
    }
    return (subTotal - discount) * rate;
  }

  /**
   *
   * @param {ProcessOrder} props
   */
  processOrder({ orderData, userInfo, paymentInfo, shippingInfo, promoInfo }) {
    let subTotal = 0;
    let tax = 0;
    let shipping = 0;
    let discount = 0;
    let paymentFee = 0;
    let finalTotal = 0;

    orderData.items.forEach((item) => {
      subTotal += item.price * item.quantity;
    });

    if (promoInfo?.code === "FREESHIP") {
      shipping = 0;
    }

    discount = this.calculateDiscountByTypeUser({
      subTotal,
      userType: userInfo.type,
    });

    discount = this.calculateDiscountByPromoCode({
      discount,
      subTotal,
      code: promoInfo?.code,
    });

    shipping =
      this.calculateShippingByShippingType({
        shippingType: shippingInfo.type,
      }) || shipping;

    tax =
      this.calculateTaxByUserState({
        subTotal,
        discount,
        state: userInfo.state,
      }) || tax;

    paymentFee = this.calculatePaymentFeeByPaymentMethod({
      subTotal,
      discount,
      method: paymentInfo.method,
    });

    finalTotal = subTotal - discount + tax + shipping + paymentFee;
    finalTotal = Math.round(finalTotal * 100) / 100;

    return finalTotal;
  }

  /**
   *
   * @param {ValidateOrderData} props
   */
  validateOrderData({ order, inventory, errors }) {
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
