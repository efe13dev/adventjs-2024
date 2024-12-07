import { describe, it, expect } from 'vitest';
import { createFrame } from './createFrame';

describe('createFrame', () => {
  it('debe enmarcar correctamente tres nombres de diferentes longitudes', () => {
    const input = ['midu', 'madeval', 'educalvolpz'];
    const expected = [
      '***************',
      '* midu        *',
      '* madeval     *',
      '* educalvolpz *',
      '***************'
    ].join('\n');

    expect(createFrame(input)).toBe(expected);
  });

  it('debe enmarcar correctamente un solo nombre', () => {
    const input = ['midu'];
    const expected = ['********', '* midu *', '********'].join('\n');

    expect(createFrame(input)).toBe(expected);
  });

  it('debe enmarcar correctamente nombres con longitud incremental', () => {
    const input = ['a', 'bb', 'ccc'];
    const expected = [
      '*******',
      '* a   *',
      '* bb  *',
      '* ccc *',
      '*******'
    ].join('\n');

    expect(createFrame(input)).toBe(expected);
  });

  it('debe enmarcar correctamente cuatro nombres de longitud incremental', () => {
    const input = ['a', 'bb', 'ccc', 'dddd'];
    const expected = [
      '********',
      '* a    *',
      '* bb   *',
      '* ccc  *',
      '* dddd *',
      '********'
    ].join('\n');

    expect(createFrame(input)).toBe(expected);
  });

  it('debe manejar un array vacío', () => {
    const input: string[] = [];
    const expected = '****\n****';

    expect(createFrame(input)).toBe(expected);
  });
});
