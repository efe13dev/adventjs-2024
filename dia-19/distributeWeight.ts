export function distributeWeight(weight: number): string {
  if (weight === 0) return '';

  const boxRepresentations: Record<number, string[]> = {
    10: [' _________ ', '|         |', '|_________|'],
    5: [' _____ ', '|     |', '|_____|'],
    2: [' ___ ', '|___|'],
    1: [' _ ', '|_|']
  };

  const numbers = Object.keys(boxRepresentations).map(Number);
  while (weight < numbers[numbers.length - 1]) numbers.pop();

  const number = numbers[numbers.length - 1];
  const bottom: string[] = boxRepresentations[number];
  const top = distributeWeight(weight - number).split('\n');

  if (top[0].length > 1) {
    const toReplace = top.pop();
    if (toReplace !== undefined) {
      bottom[0] = (toReplace + bottom[0].slice(toReplace.length)).trim();
    }
  }

  return top
    .concat(bottom)
    .filter((line) => line.length)
    .join('\n');
}
