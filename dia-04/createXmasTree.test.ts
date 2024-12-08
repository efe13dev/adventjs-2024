import { describe, expect, it } from 'vitest';
import createXmasTree from './createXmasTree';

describe('createXmasTree', () => {
  it('should create a tree of height 3 with + ornaments', () => {
    const expected = ['__+__', '_+++_', '+++++', '__#__', '__#__'].join('\n');

    expect(createXmasTree(3, '+')).toBe(expected);
  });

  it('should create a tree of height 5 with * ornaments', () => {
    const expected = [
      '____*____',
      '___***___',
      '__*****__',
      '_*******_',
      '*********',
      '____#____',
      '____#____'
    ].join('\n');

    expect(createXmasTree(5, '*')).toBe(expected);
  });

  it('should create a tree of height 6 with @ ornaments', () => {
    const expected = [
      '_____@_____',
      '____@@@____',
      '___@@@@@___',
      '__@@@@@@@__',
      '_@@@@@@@@@_',
      '@@@@@@@@@@@',
      '_____#_____',
      '_____#_____'
    ].join('\n');

    expect(createXmasTree(6, '@')).toBe(expected);
  });

  it('should handle special characters as ornaments', () => {
    const expected = ['__$__', '_$$$_', '$$$$$', '__#__', '__#__'].join('\n');

    expect(createXmasTree(3, '$')).toBe(expected);
  });
});
