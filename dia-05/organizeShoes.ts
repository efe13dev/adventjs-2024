export interface Shoe {
  type: 'I' | 'R';
  size: number;
}

function countShoesBySize(
  shoes: Shoe[]
): Map<number, { left: number; right: number }> {
  return shoes.reduce((counts, shoe) => {
    if (!counts.has(shoe.size)) {
      counts.set(shoe.size, { left: 0, right: 0 });
    }
    const count = counts.get(shoe.size);
    if (count !== undefined) {
      shoe.type === 'I' ? count.left++ : count.right++;
    }
    return counts;
  }, new Map<number, { left: number; right: number }>());
}

export function organizeShoes(shoes: Shoe[]): number[] {
  const shoeCounts = countShoesBySize(shoes);
  const result: number[] = [];

  for (const [size, count] of shoeCounts.entries()) {
    const pairs = Math.min(count.left, count.right);
    for (let i = 0; i < pairs; i++) {
      result.push(size);
    }
  }

  return result;
}
