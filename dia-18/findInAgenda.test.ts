import { describe, expect, it } from 'vitest';
import findInAgenda from './findInAgenda';

describe('findInAgenda', () => {
  it('debe encontrar un contacto cuando el teléfono coincide exactamente', () => {
    const agenda = '<John Doe> +1-555-123-456 Calle Principal 123';
    const result = findInAgenda(agenda, '555');
    expect(result).toEqual({
      name: 'John Doe',
      address: 'Calle Principal 123'
    });
  });

  it('debe retornar null cuando el teléfono no existe', () => {
    const agenda = '<John Doe> +1-555-123-456 Calle Principal 123';
    const result = findInAgenda(agenda, '999');
    expect(result).toBeNull();
  });

  it('debe manejar múltiples líneas y encontrar el contacto correcto', () => {
    const agenda =
      '<John Doe> +1-555-123-456 Calle Principal 123\n<Jane Smith> +1-999-888-777 Avenida Central 456';
    const result = findInAgenda(agenda, '999');
    expect(result).toEqual({
      name: 'Jane Smith',
      address: 'Avenida Central 456'
    });
  });

  it('debe retornar null cuando el formato del contacto es inválido', () => {
    const agenda = 'John Doe +1-555-123-456 Calle Principal 123';
    const result = findInAgenda(agenda, '555');
    expect(result).toBeNull();
  });

  it('debe manejar espacios extra y mantener el formato correcto', () => {
    const agenda = '  <Maria García>    +34-555-666-777    Plaza Mayor 789   ';
    const result = findInAgenda(agenda, '555');
    expect(result).toEqual({
      name: 'Maria García',
      address: 'Plaza Mayor 789'
    });
  });
});
