const { isValid, findFirstError } = require("./leetcode.js");

describe("Valid Parentheses", () => {
  describe("isValid", () => {
    test("deve retornar true para string vazia", () => {
      const startTime = performance.now();
      const result = isValid("");
      const endTime = performance.now();

      console.log(`isValid(''): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(true);
    });

    test("deve retornar true para parênteses simples", () => {
      const startTime = performance.now();
      const result = isValid("()");
      const endTime = performance.now();

      console.log(`isValid('()'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(true);
    });

    test("deve retornar true para múltiplos tipos de parênteses", () => {
      const startTime = performance.now();
      const result = isValid("()[]{}");
      const endTime = performance.now();

      console.log(`isValid('()[]{}'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(true);
    });

    test("deve retornar true para parênteses aninhados", () => {
      const startTime = performance.now();
      const result = isValid("{[]}");
      const endTime = performance.now();

      console.log(`isValid('{[]}'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(true);
    });

    test("deve retornar false para parênteses incompatíveis", () => {
      const startTime = performance.now();
      const result = isValid("(]");
      const endTime = performance.now();

      console.log(`isValid('(]'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(false);
    });

    test("deve retornar false para ordem incorreta", () => {
      const startTime = performance.now();
      const result = isValid("([)]");
      const endTime = performance.now();

      console.log(`isValid('([)]'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(false);
    });

    test("deve retornar false para apenas abertura", () => {
      const startTime = performance.now();
      const result = isValid("(((");
      const endTime = performance.now();

      console.log(`isValid('((('): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(false);
    });

    test("deve retornar false para apenas fechamento", () => {
      const startTime = performance.now();
      const result = isValid(")))");
      const endTime = performance.now();

      console.log(`isValid(')))'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(false);
    });

    test("deve retornar true para string complexa válida", () => {
      const startTime = performance.now();
      const result = isValid("({[]})[{}]");
      const endTime = performance.now();

      console.log(
        `isValid('({[]})[{}]'): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result).toBe(true);
    });

    test("deve retornar false para string complexa inválida", () => {
      const startTime = performance.now();
      const result = isValid("({[}])[{}]");
      const endTime = performance.now();

      console.log(
        `isValid('({[}])[{}]'): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result).toBe(false);
    });

    test("deve lidar com string longa válida", () => {
      const longString = "()".repeat(1000);
      const startTime = performance.now();
      const result = isValid(longString);
      const endTime = performance.now();

      console.log(
        `isValid(longString 2000 chars): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result).toBe(true);
    });

    test("deve lidar com string longa inválida", () => {
      const longString = "(".repeat(1000) + ")".repeat(999);
      const startTime = performance.now();
      const result = isValid(longString);
      const endTime = performance.now();

      console.log(
        `isValid(longString 1999 chars): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result).toBe(false);
    });
  });

  describe("findFirstError", () => {
    test("deve retornar válido para string vazia", () => {
      const startTime = performance.now();
      const result = findFirstError("");
      const endTime = performance.now();

      console.log(`findFirstError(''): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result.valid).toBe(true);
      expect(result.error).toBeNull();
    });

    test("deve retornar válido para string válida", () => {
      const startTime = performance.now();
      const result = findFirstError("()[]{}");
      const endTime = performance.now();

      console.log(
        `findFirstError('()[]{}'): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result.valid).toBe(true);
      expect(result.error).toBeNull();
    });

    test("deve encontrar erro de parêntese fechado sem abertura", () => {
      const startTime = performance.now();
      const result = findFirstError(")");
      const endTime = performance.now();

      console.log(`findFirstError(')'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result.valid).toBe(false);
      expect(result.error).toContain("Parêntese fechado");
      expect(result.position).toBe(0);
      expect(result.character).toBe(")");
    });

    test("deve encontrar erro de tipo incompatível", () => {
      const startTime = performance.now();
      const result = findFirstError("(]");
      const endTime = performance.now();

      console.log(
        `findFirstError('(]'): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result.valid).toBe(false);
      expect(result.error).toContain("não corresponde");
      expect(result.position).toBe(1);
      expect(result.character).toBe("]");
    });

    test("deve encontrar erro de parêntese não fechado", () => {
      const startTime = performance.now();
      const result = findFirstError("(((");
      const endTime = performance.now();

      console.log(
        `findFirstError('((('): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result.valid).toBe(false);
      expect(result.error).toContain("não foi fechado");
      expect(result.position).toBe(2);
      expect(result.character).toBe("(");
    });

    test("deve encontrar primeiro erro em string complexa", () => {
      const startTime = performance.now();
      const result = findFirstError("({[}])[{}]");
      const endTime = performance.now();

      console.log(
        `findFirstError('({[}])[{}]'): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result.valid).toBe(false);
      expect(result.error).toContain("não corresponde");
      expect(result.position).toBe(3);
      expect(result.character).toBe("}");
    });

    test("deve lidar com string longa e encontrar erro", () => {
      const longString = "(".repeat(1000) + ")".repeat(999);
      const startTime = performance.now();
      const result = findFirstError(longString);
      const endTime = performance.now();

      console.log(
        `findFirstError(longString 1999 chars): ${(endTime - startTime).toFixed(
          2
        )}ms`
      );
      expect(result.valid).toBe(false);
      expect(result.error).toContain("não foi fechado");
    });
  });

  describe("Performance Tests", () => {
    test("deve processar string muito longa rapidamente", () => {
      const veryLongString = "()[]{}".repeat(1000);
      const startTime = performance.now();
      const result = isValid(veryLongString);
      const endTime = performance.now();

      console.log(
        `isValid(veryLongString 6000 chars): ${(endTime - startTime).toFixed(
          2
        )}ms`
      );
      expect(result).toBe(true);
      expect(endTime - startTime).toBeLessThan(100); // Deve ser rápido
    });

    test("deve encontrar erro rapidamente em string longa", () => {
      const veryLongString = "(".repeat(5000) + ")".repeat(4999);
      const startTime = performance.now();
      const result = findFirstError(veryLongString);
      const endTime = performance.now();

      console.log(
        `findFirstError(veryLongString 9999 chars): ${(
          endTime - startTime
        ).toFixed(2)}ms`
      );
      expect(result.valid).toBe(false);
      expect(endTime - startTime).toBeLessThan(100); // Deve ser rápido
    });
  });

  describe("Edge Cases", () => {
    test("deve lidar com string com apenas um caractere", () => {
      const startTime = performance.now();
      const result = isValid("(");
      const endTime = performance.now();

      console.log(`isValid('('): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(false);
    });

    test("deve lidar com string com caracteres misturados", () => {
      const startTime = performance.now();
      const result = isValid("()[]{}()[]{}");
      const endTime = performance.now();

      console.log(
        `isValid('()[]{}()[]{}'): ${(endTime - startTime).toFixed(2)}ms`
      );
      expect(result).toBe(true);
    });

    test("deve lidar com string com padrão repetitivo", () => {
      const startTime = performance.now();
      const result = isValid("([{}])");
      const endTime = performance.now();

      console.log(`isValid('([{}])'): ${(endTime - startTime).toFixed(2)}ms`);
      expect(result).toBe(true);
    });
  });
});
