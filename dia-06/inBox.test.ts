import { describe, expect, it } from 'vitest';
import { inBox } from './inBox';

describe('inBox', () => {
  it('debería devolver true cuando el regalo está dentro de una caja simple', () => {
    expect(inBox(['###', '#*#', '###'])).toBe(true);
  });

  it('debería devolver true cuando el regalo está dentro de una caja con espacios', () => {
    expect(inBox(['####', '#* #', '# #', '####'])).toBe(true);
  });

  it('debería devolver false cuando el regalo está en el borde', () => {
    expect(inBox(['#####', '# #', '# #*', '#####'])).toBe(false);
  });

  it('debería devolver false cuando no hay regalo', () => {
    expect(inBox(['#####', '# #', '# #', '# #', '#####'])).toBe(false);
  });

  it('debería devolver true cuando hay espacios y guiones bajos dentro', () => {
    expect(inBox(['#####', '#_*_#', '#####'])).toBe(true);
  });

  it('debería devolver false cuando el regalo está fuera de la caja', () => {
    expect(inBox(['#####', '#   #', '#####', '  *  '])).toBe(false);
  });
});
