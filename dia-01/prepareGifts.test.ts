import { describe, expect, it } from 'vitest';

import { prepareGifts } from './prepareGifts';

describe('prepareGifts', () => {
  it('should remove duplicates and sort numbers in ascending order', () => {
    const gifts = [3, 1, 2, 3, 4, 2, 5];
    const result = prepareGifts(gifts);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it('should handle multiple duplicates of the same number', () => {
    const gifts = [6, 5, 5, 5, 5];
    const result = prepareGifts(gifts);
    expect(result).toEqual([5, 6]);
  });

  it('should return an empty array when input is empty', () => {
    const gifts: number[] = [];
    const result = prepareGifts(gifts);
    expect(result).toEqual([]);
  });

  it('should handle array with single number', () => {
    const gifts = [42];
    const result = prepareGifts(gifts);
    expect(result).toEqual([42]);
  });

  it('should handle negative numbers and zero', () => {
    const gifts = [0, -3, 1, -3, 0, -1, 2];
    const result = prepareGifts(gifts);
    expect(result).toEqual([-3, -1, 0, 1, 2]);
  });
});
