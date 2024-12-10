import { describe, expect, it } from 'vitest';
import { compile } from './compile';

describe('compile', () => {
  it('should handle basic MOV and return register A', () => {
    const result = compile(['MOV 5 A']);
    expect(result).toBe(5);
  });

  it('should handle multiple operations with registers', () => {
    const result = compile([
      'MOV 5 X',
      'MOV X A',
      'INC A',
    ]);
    expect(result).toBe(6);
  });

  it('should handle JMP instruction with loop', () => {
    const result = compile([
      'MOV 2 X',
      'DEC X',
      'DEC X',
      'JMP X 1',
      'MOV X A'
    ]);
    expect(result).toBe(-2);  // X will be -2 after the loop and then moved to A
  });

  it('should handle DEC and INC operations', () => {
    const result = compile([
      'MOV 10 A',
      'DEC A',
      'INC A',
      'DEC A',
    ]);
    expect(result).toBe(9);
  });

  it('should handle complex JMP conditions', () => {
    const result = compile([
      'MOV 1 X',
      'MOV 2 Y',
      'DEC X',
      'JMP X 6',
      'INC Y',
      'JMP 0 4',
      'MOV Y A',
    ]);
    expect(result).toBe(2);
  });
});
