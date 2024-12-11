import { describe, expect, it } from 'vitest'
import { decodeFilename } from './decodeFilename'

describe('decodeFilename', () => {
  it('should decode a filename with png extension', () => {
    expect(
      decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
    ).toBe('sleighDesign.png')
  })

  it('should decode a filename with pdf extension', () => {
    expect(
      decodeFilename('42_chimney_dimensions.pdf.hack2023')
    ).toBe('chimney_dimensions.pdf')
  })

  it('should decode a filename with csv extension', () => {
    expect(
      decodeFilename('987654321_elf-roster.csv.tempfile')
    ).toBe('elf-roster.csv')
  })

  it('should handle filenames with multiple underscores', () => {
    expect(
      decodeFilename('123_santa_nice_list_2024.txt.encrypted')
    ).toBe('santa_nice_list_2024.txt')
  })

  it('should handle filenames with numbers and hyphens', () => {
    expect(
      decodeFilename('456_toy-inventory-2024.xlsx.backup')
    ).toBe('toy-inventory-2024.xlsx')
  })
})
