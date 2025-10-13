// Sistema de cálculo de preço final de produtos com descontos
export function calc(p, q, t, c) {
  let r = 0;

  // calcula preco base
  for (let i = 0; i < p.length; i++) {
    r = r + p[i] * q[i];
  }

  // aplica desconto por tipo
  let d = 0;
  if (t == "VIP") {
    d = r * 0.2;
  } else if (t == "GOLD") {
    d = r * 0.15;
  } else if (t == "SILVER") {
    d = r * 0.1;
  } else if (t == "REGULAR") {
    d = r * 0.05;
  }
  r = r - d;

  // aplica cupom
  if (c) {
    if (c == "PROMO10") {
      r = r - r * 0.1;
    } else if (c == "PROMO20") {
      r = r - r * 0.2;
    } else if (c == "PROMO30") {
      r = r - r * 0.3;
    }
  }

  // calcula frete
  let f = 0;
  if (r < 100) {
    f = 15;
  } else if (r < 200) {
    f = 10;
  } else if (r < 300) {
    f = 5;
  }
  r = r + f;

  // arredonda
  r = Math.round(r * 100) / 100;

  return r;
}
