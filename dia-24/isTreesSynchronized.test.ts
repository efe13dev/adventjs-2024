import { describe, expect, test } from 'vitest';
import { isTreesSynchronized } from './isTreesSynchronized';
import type { Tree } from './isTreesSynchronized';

describe('isTreesSynchronized', () => {
  test('debería devolver [true, "1"] para árboles idénticos simples', () => {
    const tree1: Tree = { value: '1' };
    const tree2: Tree = { value: '1' };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '1']);
  });

  test('debería devolver [true, "1"] para árboles espejo simétricos', () => {
    const tree1: Tree = {
      value: '1',
      left: { value: '2' },
      right: { value: '3' }
    };
    const tree2: Tree = {
      value: '1',
      left: { value: '3' },
      right: { value: '2' }
    };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '1']);
  });

  test('debería devolver [false, "1"] para árboles no simétricos', () => {
    const tree1: Tree = {
      value: '1',
      left: { value: '2' },
      right: { value: '3' }
    };
    const tree2: Tree = {
      value: '1',
      left: { value: '2' },
      right: { value: '3' }
    };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([false, '1']);
  });

  test('debería devolver [true, "1"] para árboles complejos simétricos', () => {
    const tree1: Tree = {
      value: '1',
      left: {
        value: '2',
        left: { value: '4' },
        right: { value: '5' }
      },
      right: {
        value: '3',
        left: { value: '6' },
        right: { value: '7' }
      }
    };
    const tree2: Tree = {
      value: '1',
      left: {
        value: '3',
        left: { value: '7' },
        right: { value: '6' }
      },
      right: {
        value: '2',
        left: { value: '5' },
        right: { value: '4' }
      }
    };

    expect(isTreesSynchronized(tree1, tree2)).toEqual([true, '1']);
  });

  test('debería manejar árboles vacíos correctamente', () => {
    expect(isTreesSynchronized(undefined, undefined)).toEqual([true, '']);
  });
});
