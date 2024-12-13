import { describe, it, expect } from 'vitest';
import { isRobotBack } from './isRobotBack';

describe('isRobotBack', () => {
  it('should return [0, 0] when robot returns to origin', () => {
    expect(isRobotBack('RULD')).toEqual([0, 0]);
    expect(isRobotBack('')).toEqual([0, 0]);
  });

  it('should return coordinates when robot does not return to origin', () => {
    expect(isRobotBack('R')).toEqual([1, 0]);
    expect(isRobotBack('U')).toEqual([0, 1]);
  });

  it('should handle modifiers correctly', () => {
    expect(isRobotBack('*R')).toEqual([2, 0]);
    expect(isRobotBack('!R')).toEqual([-1, 0]);
  });
});
