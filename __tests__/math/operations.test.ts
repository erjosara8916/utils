import { divide, multiply, pow, subtract, sum } from "@/math/operations";

describe("Operaciones matemáticas", () => {
  describe("sum", () => {
    it("debería sumar dos números positivos correctamente", () => {
      expect(sum(2, 3)).toBe(5);
    });

    it("debería sumar un número positivo y uno negativo correctamente", () => {
      expect(sum(2, -3)).toBe(-1);
    });

    it("debería sumar dos números negativos correctamente", () => {
      expect(sum(-2, -3)).toBe(-5);
    });
  });

  describe("subtract", () => {
    it("debería restar dos números positivos correctamente", () => {
      expect(subtract(5, 3)).toBe(2);
    });

    it("debería restar un número positivo y uno negativo correctamente", () => {
      expect(subtract(5, -3)).toBe(8);
    });

    it("debería restar dos números negativos correctamente", () => {
      expect(subtract(-5, -3)).toBe(-2);
    });
  });

  describe("multiply", () => {
    it("debería multiplicar dos números positivos correctamente", () => {
      expect(multiply(2, 3)).toBe(6);
    });

    it("debería multiplicar un número positivo y uno negativo correctamente", () => {
      expect(multiply(2, -3)).toBe(-6);
    });

    it("debería multiplicar dos números negativos correctamente", () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    it("debería retornar cero al multiplicar por cero", () => {
      expect(multiply(5, 0)).toBe(0);
      expect(multiply(0, 5)).toBe(0);
    });
  });

  describe("divide", () => {
    it("debería dividir dos números positivos correctamente", () => {
      expect(divide(6, 2)).toBe(3);
    });

    it("debería dividir un número positivo y uno negativo correctamente", () => {
      expect(divide(6, -2)).toBe(-3);
    });

    it("debería dividir dos números negativos correctamente", () => {
      expect(divide(-6, -2)).toBe(3);
    });

    it("debería lanzar un error al dividir por cero", () => {
      expect(() => divide(5, 0)).toThrow("No se puede dividir por cero");
    });
  });

  describe("pow", () => {
    it("debería elevar un número a una potencia positiva correctamente", () => {
      expect(pow(2, 3)).toBe(8);
    });

    it("debería elevar un número a la potencia cero correctamente", () => {
      expect(pow(2, 0)).toBe(1);
    });

    it("debería lanzar un error al elevar a una potencia negativa", () => {
      expect(() => pow(2, -1)).toThrow("El exponente no puede ser negativo");
    });
  });
});
