import { describe, expect, it } from 'vitest'
import execute from './execute'

describe('execute', () => {
  it('debería manejar operaciones básicas de incremento', () => {
    expect(execute('+++')).toBe(3)
  })

  it('debería manejar operaciones básicas de decremento', () => {
    expect(execute('+--')).toBe(-1)
  })

  it('debería manejar bucles correctamente', () => {
    expect(execute('>+++[-]')).toBe(0)
    expect(execute('------[+]++')).toBe(2)
  })

  it('debería manejar condicionales correctamente', () => {
    expect(execute('>>>+{++}')).toBe(3)
    expect(execute('{+}{+}{+}')).toBe(0)
  })

  it('debería manejar combinaciones complejas de bucles y condicionales', () => {
    expect(execute('-[++{-}]+{++++}')).toBe(5)
  })
})
