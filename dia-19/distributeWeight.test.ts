import { describe, it, expect } from 'vitest';
import { distributeWeight } from './distributeWeight';

describe('distributeWeight', () => {
  it('debería manejar el peso 1 correctamente', () => {
    expect(distributeWeight(1)).toBe(' _ \n|_|');
  });

  it('debería manejar el peso 5 correctamente', () => {
    expect(distributeWeight(5)).toBe(' _____ \n|     |\n|_____|');
  });

  it('debería devolver string vacío para peso 0', () => {
    expect(distributeWeight(0)).toBe('');
  });
});
