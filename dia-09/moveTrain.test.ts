import { describe, it, expect } from 'vitest';
import { moveTrain } from './moveTrain';
import type { Board } from './moveTrain';

describe('moveTrain', () => {
  it('should return "crash" when train hits the border', () => {
    const board: Board = [
      ['·', '·', '·', '·'],
      ['·', '·', '·', '·'],
      ['@', '·', '·', '·'],
      ['o', '·', '·', '·']
    ];
    expect(moveTrain(board, 'L')).toBe('crash');
  });

  it('should return "eat" when train collects a fruit', () => {
    const board: Board = [
      ['·', '·', '·', '·'],
      ['*', '·', '·', '·'],
      ['@', '·', '·', '·'],
      ['o', '·', '·', '·']
    ];
    expect(moveTrain(board, 'U')).toBe('eat');
  });

  it('should return "none" when train moves to empty space', () => {
    const board: Board = [
      ['·', '·', '·', '·'],
      ['·', '·', '·', '·'],
      ['@', '·', '·', '·'],
      ['o', '·', '·', '·']
    ];
    expect(moveTrain(board, 'R')).toBe('none');
  });

  it('should return "crash" when train hits itself', () => {
    const board: Board = [
      ['·', '·', '·', '·'],
      ['@', 'o', '·', '·'],
      ['o', '·', '·', '·'],
      ['·', '·', '·', '·']
    ];
    expect(moveTrain(board, 'D')).toBe('crash');
  });

  it('should return "crash" when train hits top border', () => {
    const board: Board = [
      ['@', '·', '·', '·'],
      ['o', '·', '·', '·'],
      ['·', '·', '·', '·'],
      ['·', '·', '·', '·']
    ];
    expect(moveTrain(board, 'U')).toBe('crash');
  });
});
