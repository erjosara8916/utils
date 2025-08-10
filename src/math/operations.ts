/**
 * Realiza la suma de dos números.
 * @param a Primer número
 * @param b Segundo número
 * @returns La suma de a y b
 */
export const sum = (a: number, b: number): number => a + b;

/**
 * Realiza la resta de dos números.
 * @param a Primer número
 * @param b Segundo número
 * @returns La diferencia entre a y b
 */
export const subtract = (a: number, b: number): number => a - b;

/**
 * Realiza la multiplicación de dos números.
 * @param a Primer número
 * @param b Segundo número
 * @returns El producto de a y b
 */
export const multiply = (a: number, b: number): number => a * b;

/**
 * Realiza la división de dos números.
 * @param a Numerador
 * @param b Denominador
 * @returns El resultado de dividir a entre b
 * @throws Error si el denominador es cero
 */
export const divide = (a: number, b: number): number => {
  if (b === 0) {
    throw new Error('No se puede dividir por cero');
  }
  return a / b;
};

export const pow = (base: number, exponent: number): number => {
  if (exponent < 0) {
    throw new Error('El exponente no puede ser negativo');
  }
  return Math.pow(base, exponent);
}