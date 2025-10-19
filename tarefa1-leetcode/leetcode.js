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

const isCorresponding = [
  ["(", ")"],
  ["[", "]"],
  ["{", "}"],
];

function getErroMessage({ openingCharacter, closingCharacter }) {
  if (!openingCharacter && closingCharacter) {
    return "Parêntese fechado";
  }

  if (!closingCharacter) {
    return "não foi fechado";
  }

  if (!map[closingCharacter] !== openingCharacter) {
    return "não corresponde";
  }
}

function isValid(s, returnDetails = false) {
  let isValidString = true;

  // se string for vazia ele retorna true
  if (!s) {
    return true;
  }

  // cria uma variavel de stack dos caracteres especificos
  let stack = [];
  let charAndPosition = {
    openingCharacter: "",
    closingCharacter: "",
    openingPosition: 0,
    closingPosition: 0,
  };

  // faz um for pra verificar cada caracter da string especificada pelo tamanho dela
  for (let i = 0; i < s.length; i++) {
    // verifica cada caracter se ele contem uma abertura
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      // se houver ele coloca na variavel de stack
      charAndPosition.openingCharacter = s[i];
      charAndPosition.openingPosition = i;
      stack.push(s[i]);
    }
    // verifica se o ultimo elemento do stack é de fechamento correspondente ao de abertura
    else if (stack[stack.length - 1] === map[s[i]]) {
      // se for ele remove e ta tudo certo.
      stack.pop();
    } else {
      // ele irá adicionar qual caractere está incorreto
      charAndPosition.closingCharacter = s[i];
      // adicionadando qual a posição dele
      charAndPosition.closingPosition = i;
      // se nao, a string está invalida
      isValidString = false;
      if (returnDetails) {
        return { isValidString, charAndPosition };
      } else {
        return false;
      }
    }
  }

  if (stack.length) {
    isValidString = false;
  }

  if (returnDetails) {
    // se houver algo no stack ele não ta com fechamento correto e retorna false
    // se não houver elementos no stack, todos os caracteres foram fechados corretamente
    return { isValidString, charAndPosition };
  }

  return isValidString;
}

function findFirstError(s) {
  let returnData = {
    valid: false,
    error: null,
    position: 0,
    character: "",
  };

  if (!s) {
    returnData.valid = true;
    return returnData;
  }

  const { isValidString, charAndPosition } = isValid(s, true);

  if (isValidString) {
    returnData.valid = true;

    return returnData;
  }

  if (!isValidString && !!charAndPosition) {
    const {
      openingCharacter,
      closingCharacter,
      openingPosition,
      closingPosition,
    } = charAndPosition;

    returnData.character = closingCharacter || openingCharacter;
    returnData.position = closingPosition || openingPosition;

    returnData.error = getErroMessage({ openingCharacter, closingCharacter });
  }

  returnData.valid = false;

  // Implementar aqui
  return returnData;
}

module.exports = { isValid, findFirstError };
