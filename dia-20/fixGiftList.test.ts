import { describe, expect, it } from 'vitest'
import fixGiftList from './fixGiftList'

describe('fixGiftList', () => {
  it('debe detectar un regalo faltante y uno extra', () => {
    expect(
      fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
    ).toEqual({
      missing: { ball: 1 },
      extra: { car: 1 }
    })
  })

  it('debe detectar múltiples regalos faltantes y uno extra', () => {
    expect(
      fixGiftList(['book', 'train', 'kite', 'train'], ['train', 'book', 'kite', 'ball', 'kite'])
    ).toEqual({
      missing: { ball: 1, kite: 1 },
      extra: { train: 1 }
    })
  })

  it('debe detectar solo regalos faltantes', () => {
    expect(
      fixGiftList(['bear', 'bear', 'car'], ['bear', 'car', 'puzzle', 'bear', 'car', 'car'])
    ).toEqual({
      missing: { puzzle: 1, car: 2 },
      extra: {}
    })
  })

  it('debe devolver objetos vacíos cuando las listas son iguales', () => {
    expect(
      fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
    ).toEqual({
      missing: {},
      extra: {}
    })
  })

  it('debe manejar listas completamente diferentes', () => {
    expect(
      fixGiftList(['xbox', 'ps5'], ['nintendo', 'wii'])
    ).toEqual({
      missing: { nintendo: 1, wii: 1 },
      extra: { xbox: 1, ps5: 1 }
    })
  })
})
