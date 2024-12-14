import { describe, expect, it } from 'vitest';
import { minMovesToStables } from './minMovesToStables';

describe('minMovesToStables', () => {
  it('debe retornar 3 movimientos para el ejemplo básico del README', () => {
    expect(minMovesToStables([2, 6, 9], [3, 8, 5])).toBe(3);
  });

  it('debe retornar 8 movimientos cuando hay renos en la misma posición', () => {
    expect(minMovesToStables([1, 1, 3], [1, 8, 4])).toBe(8);
  });

  it('debe retornar 0 cuando los renos ya están en las posiciones correctas', () => {
    expect(minMovesToStables([1, 2, 3], [1, 2, 3])).toBe(0);
  });

  it('debe manejar correctamente posiciones negativas', () => {
    expect(minMovesToStables([-1, 0, 2], [1, -2, 3])).toBe(3);
  });

  it('debe funcionar con números grandes', () => {
    expect(minMovesToStables([100, 200, 300], [50, 250, 150])).toBe(150);
  });
});
