import { describe, expect, it } from 'vitest';
import { removeSnow } from './removeSnow';

describe('removeSnow', () => {
  it('debe eliminar pares de caracteres adyacentes iguales hasta que no queden más', () => {
    expect(removeSnow('zxxzoz')).toBe('oz');
  });

  it('debe eliminar solo un par de caracteres adyacentes iguales', () => {
    expect(removeSnow('abcdd')).toBe('abc');
  });

  it('debe manejar correctamente una cadena con tres caracteres iguales consecutivos', () => {
    expect(removeSnow('zzz')).toBe('z');
  });

  it('debe devolver la misma cadena si no hay caracteres adyacentes iguales', () => {
    expect(removeSnow('abc')).toBe('abc');
  });

  it('debe manejar correctamente una cadena de un solo carácter', () => {
    expect(removeSnow('a')).toBe('a');
  });
});
