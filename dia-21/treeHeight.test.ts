import { describe, expect, it } from 'vitest';
import treeHeight from './treeHeight';

describe('treeHeight', () => {
  it('debería devolver 0 para un árbol nulo', () => {
    expect(treeHeight(null)).toBe(0);
  });

  it('debería devolver 1 para un árbol con solo raíz', () => {
    const tree = {
      value: '🎁',
      left: null,
      right: null
    };
    expect(treeHeight(tree)).toBe(1);
  });

  it('debería devolver 2 para un árbol con un nivel de profundidad', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: null,
        right: null
      },
      right: null
    };
    expect(treeHeight(tree)).toBe(2);
  });

  it('debería devolver 3 para el árbol del ejemplo', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: null,
          right: null
        },
        right: {
          value: '🎅',
          left: null,
          right: null
        }
      },
      right: {
        value: '❄️',
        left: null,
        right: {
          value: '🦌',
          left: null,
          right: null
        }
      }
    };
    expect(treeHeight(tree)).toBe(3);
  });

  it('debería manejar un árbol desbalanceado', () => {
    const tree = {
      value: '🎁',
      left: {
        value: '🎄',
        left: {
          value: '⭐',
          left: {
            value: '🎅',
            left: null,
            right: null
          },
          right: null
        },
        right: null
      },
      right: null
    };
    expect(treeHeight(tree)).toBe(4);
  });
});
