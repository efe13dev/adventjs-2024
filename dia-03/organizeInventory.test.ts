import { describe, it, expect } from 'vitest';
import { organizeInventory } from './organizeInventory';
import type { Inventory } from './organizeInventory';

describe('organizeInventory', () => {
  it('should return an empty object when inventory is empty', () => {
    const emptyInventory: Inventory[] = [];
    expect(organizeInventory(emptyInventory)).toEqual({});
  });

  it('should organize inventory with multiple items and categories', () => {
    const inventory: Inventory[] = [
      { name: 'doll', quantity: 5, category: 'toys' },
      { name: 'car', quantity: 3, category: 'toys' },
      { name: 'ball', quantity: 2, category: 'sports' },
      { name: 'car', quantity: 2, category: 'toys' },
      { name: 'racket', quantity: 4, category: 'sports' }
    ];

    const expected = {
      toys: {
        doll: 5,
        car: 5
      },
      sports: {
        ball: 2,
        racket: 4
      }
    };

    expect(organizeInventory(inventory)).toEqual(expected);
  });

  it('should sum quantities for items with the same name in the same category', () => {
    const inventory: Inventory[] = [
      { name: 'book', quantity: 10, category: 'education' },
      { name: 'book', quantity: 5, category: 'education' },
      { name: 'paint', quantity: 3, category: 'art' }
    ];

    const expected = {
      education: {
        book: 15
      },
      art: {
        paint: 3
      }
    };

    expect(organizeInventory(inventory)).toEqual(expected);
  });

  it('should handle single item in a category', () => {
    const inventory: Inventory[] = [
      { name: 'pencil', quantity: 3, category: 'school' }
    ];

    const expected = {
      school: {
        pencil: 3
      }
    };

    expect(organizeInventory(inventory)).toEqual(expected);
  });
});
