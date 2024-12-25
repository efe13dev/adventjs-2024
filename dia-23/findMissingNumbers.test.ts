import { describe, expect, it } from 'vitest';
import findMissingNumbers from './findMissingNumbers';

describe('findMissingNumbers', () => {
  it('debe encontrar números faltantes en una secuencia simple', () => {
    expect(findMissingNumbers([1, 2, 4, 6])).toEqual([3, 5]);
  });

  it('debe encontrar números faltantes cuando faltan varios números consecutivos', () => {
    expect(findMissingNumbers([4, 8, 7, 2])).toEqual([1, 3, 5, 6]);
  });

  it('debe retornar array vacío cuando no faltan números', () => {
    expect(findMissingNumbers([3, 2, 1, 1])).toEqual([]);
  });

  it('debe manejar números repetidos y encontrar el número faltante', () => {
    expect(findMissingNumbers([5, 5, 5, 3, 3, 2, 1])).toEqual([4]);
  });

  it('debe manejar array vacío', () => {
    expect(findMissingNumbers([])).toEqual([]);
  });
});
