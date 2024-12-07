function prepareGifts(gifts: number[]): number[] {
  const result = new Set(gifts.sort((a, b) => a - b));
  return [...result];
}
