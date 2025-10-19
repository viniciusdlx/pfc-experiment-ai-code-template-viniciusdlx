// console.log("Início Tarefa 1 - SEM IA");

/**
 * LeetCode Problem: Valid Parentheses
 *
 * Problema: Dada uma string contendo apenas os caracteres '(', ')', '{', '}', '[' e ']',
 * determine se a string de entrada é válida.
 *
 * Uma string de entrada é válida se:
 * 1. Parênteses abertos devem ser fechados pelo mesmo tipo.
 * 2. Parênteses abertos devem ser fechados na ordem correta.
 * 3. Cada parêntese fechado tem um parêntese aberto correspondente do mesmo tipo.
 *
 * Categoria: String, Stack
 *
 * Exemplo:
 * Input: s = "()"
 * Output: true
 *
 * Input: s = "()[]{}"
 * Output: true
 *
 * Input: s = "(]"
 * Output: false
 *
 * Input: s = "([)]"
 * Output: false
 *
 * Input: s = "{[]}"
 * Output: true
 */

const map = {
  ")": "(",
  "}": "{",
  "]": "[",
};

function isValid(s) {
  // se string for vazia ele retorna true
  if (!s) {
    return true;
  }

  // cria uma variavel de stack dos caracteres especificos
  let stack = [];

  // faz um for pra verificar cada caracter da string especificada pelo tamanho dela
  for (let i = 0; i < s.length; i++) {
    // verifica cada caracter se ele contem uma abertura
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      // se houver ele coloca na variavel de stack
      stack.push(s[i]);
    }
    // verifica se o ultimo elemento do stack é de fechamento correspondente ao de abertura
    else if (stack[stack.length - 1] === map[s[i]]) {
      // se for ele remove e ta tudo certo.
      stack.pop();
    } else return false; // se nao, a string está invalida
  }

  // se houver algo no stack ele não ta com fechamento correto e retorna false
  // se não houver elementos no stack, todos os caracteres foram fechados corretamente
  return stack.length ? false : true;
}

function findFirstError(s) {
  // Implementar aqui
  return { valid: false, error: null, position: 0, character: "" };
}

module.exports = { isValid, findFirstError };
