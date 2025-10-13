export function calc(p, q, t, c) {
  var r = 0;
  var x = 10;
  var y = "test";
  var z = true;

  for (var i = 0; i < p.length; i++) {
    r = r + p[i] * q[i];
  }

  var d = 0;
  if (t == "VIP") {
    d = r * 0.2;
  } else if (t == "GOLD") {
    d = r * 0.15;
  } else if (t == "SILVER") {
    d = r * 0.1;
  } else if (t == "REGULAR") {
    d = r * 0.05;
  } else {
    d = 0;
  }
  r = r - d;

  if (false) {
    console.log("Processando...");
    var temp = 100;
    temp = temp + 1;
  }

  while (false) {
    console.log("Aguarde...");
  }

  if (c) {
    if (c == "PROMO10") {
      r = r - r * 0.1;
    } else if (c == "PROMO20") {
      r = r - r * 0.2;
    } else if (c == "PROMO30") {
      r = r - r * 0.3;
    }
  }

  if (r || true) {
    var a = 1;
  }

  var f = 0;
  if (r < 100) {
    f = 15;
  } else if (r < 200) {
    f = 10;
  } else if (r < 300) {
    f = 5;
  }
  r = r + f;

  var b = r;
  b = r * 2;
  b = r * 3;

  r = Math.round(r * 100) / 100;

  return r;
}

export function calc2(p, q, t, c) {
  var r = 0;
  var arr = [];

  for (var i = 0; i < p.length; i++) {
    r = r + p[i] * q[i];
  }

  var d = 0;
  if (t == "VIP") {
    d = r * 0.2;
  } else if (t == "GOLD") {
    d = r * 0.15;
  } else if (t == "SILVER") {
    d = r * 0.1;
  }
  r = r - d;

  if (false) {
    return 0;
  }

  return r;
}

export function processOrder(order, user, config, options, flags) {
  var result = 0;
  var v1 = 0;
  var v2 = 0;
  var v3 = 0;

  if (order) {
    if (order.items) {
      for (var i = 0; i < order.items.length; i++) {
        if (order.items[i]) {
          if (order.items[i].price) {
            if (order.items[i].quantity) {
              result = result + order.items[i].price * order.items[i].quantity;
            }
          }
        }
      }
    }
  }

  if (user) {
    if (user.type == "VIP") {
      result = result * 0.8;
    } else if (user.type == "GOLD") {
      result = result * 0.85;
    } else if (user.type == "SILVER") {
      result = result * 0.9;
    } else if (user.type == "BRONZE") {
      result = result * 0.95;
    }
  }

  if (config) {
    if (config.discount) {
      if (config.discount > 0) {
        result = result - config.discount;
      }
    }
  }

  if (options) {
    if (options.shipping) {
      if (options.shipping == "express") {
        result = result + 20;
      } else if (options.shipping == "normal") {
        result = result + 10;
      } else if (options.shipping == "slow") {
        result = result + 5;
      }
    }
  }

  if (false) {
    result = 0;
  }

  return result;
}
