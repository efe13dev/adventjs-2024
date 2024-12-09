import { describe, test, expect } from 'vitest'
import drawRace from './drawRace'

describe('drawRace', () => {
  test('should handle empty lanes and positive/negative positions', () => {
    const result = drawRace([0, 5, -3], 10)
    expect(result).toBe('  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3')
  })

  test('should handle multiple reindeer positions', () => {
    const result = drawRace([2, -1, 0, 5], 8)
    expect(result).toBe('   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4')
  })

  test('should handle longer tracks', () => {
    const result = drawRace([3, 7, -2], 12)
    expect(result).toBe('  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3')
  })

  test('should handle edge cases', () => {
    // All empty lanes
    expect(drawRace([0, 0, 0], 5)).toBe('  ~~~~~ /1\n ~~~~~ /2\n~~~~~ /3')
    
    // All reindeer at start
    expect(drawRace([0, 1, 1], 5)).toBe('  ~~~~~ /1\n ~r~~~ /2\n~r~~~ /3')
    
    // All reindeer at end
    expect(drawRace([-1, -1, -1], 5)).toBe('  ~~~~r /1\n ~~~~r /2\n~~~~r /3')
  })
})
