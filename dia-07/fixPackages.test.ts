import { describe, expect, it } from 'vitest'
import { fixPackages } from './fixPackages'

describe('fixPackages', () => {
  it('should handle simple parentheses case', () => {
    expect(fixPackages('a(cb)de')).toBe('abcde')
  })

  it('should handle nested parentheses case', () => {
    expect(fixPackages('a(bc(def)g)h')).toBe('agdefcbh')
  })

  it('should handle multiple nested parentheses', () => {
    expect(fixPackages('abc(def(gh)i)jk')).toBe('abcighfedjk')
  })

  it('should handle consecutive nested parentheses', () => {
    expect(fixPackages('a(b(c))e')).toBe('acbe')
  })

  it('should handle empty parentheses and edge cases', () => {
    expect(fixPackages('a()b')).toBe('ab')
    expect(fixPackages('')).toBe('')
    expect(fixPackages('abc')).toBe('abc')
  })
})
