import { describe, it, expect } from 'vitest';
import { calculatePrice } from './calculatePrice'; // Asume que la función está en este archivo

describe('calculatePrice function', () => {
  // Casos básicos de valores individuales
  it('should calculate single ornament prices correctly', () => {
    expect(calculatePrice('*')).toBe(1); // Copo de nieve
    expect(calculatePrice('o')).toBe(5); // Bola de Navidad
    expect(calculatePrice('^')).toBe(10); // Arbolito decorativo
    expect(calculatePrice('#')).toBe(50); // Guirnalda brillante
    expect(calculatePrice('@')).toBe(100); // Estrella polar
  });

  // Casos de suma simple
  it('should sum ornament prices when in ascending order', () => {
    expect(calculatePrice('***')).toBe(3); // Tres copos de nieve
    expect(calculatePrice('^^^')).toBe(30); // Tres arbolitos
    expect(calculatePrice('@@@')).toBe(300); // Tres estrellas polares
  });

  // Casos con regla de resta
  it('should subtract value if next ornament has higher value', () => {
    expect(calculatePrice('*o')).toBe(4); // 5 - 1
    expect(calculatePrice('o*')).toBe(6); // 5 + 1
    expect(calculatePrice('*#')).toBe(49); // 50 - 1
    expect(calculatePrice('#@')).toBe(50); // 50 + 100
  });

  // Casos más complejos
  it('should handle complex ornament sequences', () => {
    expect(calculatePrice('*o*')).toBe(5); // -1 + 5 + 1
    expect(calculatePrice('**o*')).toBe(6); // 1 - 1 + 5 + 1
    expect(calculatePrice('o***')).toBe(8); // 5 + 3
    expect(calculatePrice('*o@')).toBe(94); // -1 - 5 + 100
  });

  // Caso de caracteres no válidos
  it('should return undefined for unknown characters', () => {
    expect(calculatePrice('#@Z')).toBeUndefined();
    expect(calculatePrice('abc')).toBeUndefined();
    expect(calculatePrice('*X#')).toBeUndefined();
  });

  // Casos límite y vacío
  it('should handle edge cases', () => {
    expect(calculatePrice('')).toBe(0);
  });
});
