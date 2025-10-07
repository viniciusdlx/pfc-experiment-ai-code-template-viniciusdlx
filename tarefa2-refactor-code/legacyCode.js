export function processStuff(a, b, c) {
  let x = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      x += a[i] * 2 + b;
    } else {
      x += a[i] * 3 - c;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      x += a[i] * 2 + b;
    } else {
      x += a[i] * 3 - c;
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (a[i] % 2 === 0) {
      x += a[i] * 2 + b;
    } else {
      x += a[i] * 3 - c;
    }
  }

  return "res:" + x;
}
