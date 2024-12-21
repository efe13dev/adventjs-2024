function fixGiftList(
  received: string[],
  expected: string[]
): { missing: Record<string, number>; extra: Record<string, number> } {
  const missing = expected.reduce((acc, gift) => {
    const diff = expected.filter(g => g === gift).length - received.filter(g => g === gift).length
    return diff > 0 ? { ...acc, [gift]: diff } : acc
  }, {})

  const extra = received.reduce((acc, gift) => {
    const diff = received.filter(g => g === gift).length - expected.filter(g => g === gift).length
    return diff > 0 ? { ...acc, [gift]: diff } : acc
  }, {})

  return { missing, extra }
}

export default fixGiftList;
