import { describe, expect, test } from 'vitest'
import { detectBombs } from './detectBombs'

describe('detectBombs', () => {
  test('debería manejar una cuadrícula 2x2 con una bomba', () => {
    const grid = [
      [true, false],
      [false, false]
    ]
    const expected = [
      [0, 1],
      [1, 1]
    ]
    expect(detectBombs(grid)).toEqual(expected)
  })

  test('debería manejar una cuadrícula 3x3 con múltiples bombas', () => {
    const grid = [
      [true, false, true],
      [false, false, false],
      [true, false, true]
    ]
    const expected = [
      [0, 2, 0],
      [2, 4, 2],
      [0, 2, 0]
    ]
    expect(detectBombs(grid)).toEqual(expected)
  })

  test('debería manejar una cuadrícula sin bombas', () => {
    const grid = [
      [false, false],
      [false, false]
    ]
    const expected = [
      [0, 0],
      [0, 0]
    ]
    expect(detectBombs(grid)).toEqual(expected)
  })

  test('debería manejar una cuadrícula con todas las bombas', () => {
    const grid = [
      [true, true],
      [true, true]
    ]
    const expected = [
      [3, 3],
      [3, 3]
    ]
    expect(detectBombs(grid)).toEqual(expected)
  })

  test('debería manejar una cuadrícula 1x1', () => {
    const grid = [[false]]
    const expected = [[0]]
    expect(detectBombs(grid)).toEqual(expected)
  })
})
