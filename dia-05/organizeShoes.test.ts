import { describe, expect, it } from 'vitest';
import { organizeShoes } from './organizeShoes';
import type { Shoe } from './organizeShoes';

describe('organizeShoes', () => {
  it('should return empty array when no shoes are provided', () => {
    expect(organizeShoes([])).toEqual([]);
  });

  it('should return array with sizes of complete pairs', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 42 },
      { type: 'R', size: 42 },
      { type: 'I', size: 41 },
      { type: 'R', size: 41 }
    ];
    expect(organizeShoes(shoes).sort((a, b) => a - b)).toEqual([41, 42].sort((a, b) => a - b));
  });

  it('should handle multiple pairs of the same size', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 42 },
      { type: 'R', size: 42 },
      { type: 'I', size: 42 },
      { type: 'R', size: 42 }
    ];
    expect(organizeShoes(shoes).sort((a, b) => a - b)).toEqual([42, 42].sort((a, b) => a - b));
  });

  it('should ignore unpaired shoes', () => {
    const shoes: Shoe[] = [
      { type: 'I', size: 42 },
      { type: 'I', size: 42 },
      { type: 'R', size: 42 },
      { type: 'R', size: 41 }
    ];
    expect(organizeShoes(shoes).sort((a, b) => a - b)).toEqual([42].sort((a, b) => a - b));
  });
});
