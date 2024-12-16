import { describe, expect, test } from 'vitest';
import drawTable from './drawTable';

describe('drawTable', () => {
  test('debería devolver una cadena vacía para un array vacío', () => {
    expect(drawTable([])).toBe('');
  });

  test('debería formatear correctamente una tabla con nombres y ciudades', () => {
    const data = [
      { name: 'Alice', city: 'London' },
      { name: 'Bob', city: 'Paris' },
      { name: 'Charlie', city: 'New York' }
    ];
    const expected = [
      '+---------+----------+',
      '| Name    | City     |',
      '+---------+----------+',
      '| Alice   | London   |',
      '| Bob     | Paris    |',
      '| Charlie | New York |',
      '+---------+----------+'
    ].join('\n');
    expect(drawTable(data)).toBe(expected);
  });

  test('debería formatear correctamente una tabla de regalos y cantidades', () => {
    const data = [
      { gift: 'Doll', quantity: 10 },
      { gift: 'Book', quantity: 5 },
      { gift: 'Music CD', quantity: 1 }
    ];
    const expected = [
      '+----------+----------+',
      '| Gift     | Quantity |',
      '+----------+----------+',
      '| Doll     | 10       |',
      '| Book     | 5        |',
      '| Music CD | 1        |',
      '+----------+----------+'
    ].join('\n');
    expect(drawTable(data)).toBe(expected);
  });
});
