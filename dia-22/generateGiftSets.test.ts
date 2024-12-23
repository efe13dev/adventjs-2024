import { describe, expect, it } from 'vitest';
import generateGiftSets from './generateGiftSets';

describe('generateGiftSets', () => {
  it('debería generar combinaciones correctas para un solo regalo', () => {
    expect(generateGiftSets(['ball'])).toEqual([
      ['ball']
    ]);
  });

  it('debería generar combinaciones correctas para dos regalos', () => {
    expect(generateGiftSets(['game', 'pc'])).toEqual([
      ['game'],
      ['pc'],
      ['game', 'pc']
    ]);
  });

  it('debería generar combinaciones correctas para tres regalos', () => {
    expect(generateGiftSets(['car', 'doll', 'puzzle'])).toEqual([
      ['car'],
      ['doll'],
      ['puzzle'],
      ['car', 'doll'],
      ['car', 'puzzle'],
      ['doll', 'puzzle'],
      ['car', 'doll', 'puzzle']
    ]);
  });

  it('debería mantener el orden correcto por longitud y aparición', () => {
    const result = generateGiftSets(['a', 'b', 'c']);
    
    // Verificamos que primero vienen las combinaciones de longitud 1
    expect(result.slice(0, 3)).toEqual([['a'], ['b'], ['c']]);
    
    // Luego las de longitud 2
    expect(result.slice(3, 6)).toEqual([
      ['a', 'b'],
      ['a', 'c'],
      ['b', 'c']
    ]);
    
    // Finalmente la de longitud 3
    expect(result.slice(6)).toEqual([['a', 'b', 'c']]);
  });

  it('debería manejar correctamente un array con caracteres especiales', () => {
    expect(generateGiftSets(['🎮', '📱', '💻'])).toEqual([
      ['🎮'],
      ['📱'],
      ['💻'],
      ['🎮', '📱'],
      ['🎮', '💻'],
      ['📱', '💻'],
      ['🎮', '📱', '💻']
    ]);
  });
});
