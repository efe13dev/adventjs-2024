export default function createXmasTree(
  height: number,
  ornament: string
): string {
  // Calculate the maximum width of the tree (base of the triangle)
  const maxWidth = 2 * height - 1;
  const result = [];

  // Create the tree body
  for (let i = 0; i < height; i++) {
    const ornaments = ornament.repeat(2 * i + 1);
    const padding = '_'.repeat((maxWidth - (2 * i + 1)) / 2);
    result.push(padding + ornaments + padding);
  }

  // Add the trunk (2 lines of #)
  const trunkPadding = '_'.repeat((maxWidth - 1) / 2);
  result.push(trunkPadding + '#' + trunkPadding);
  result.push(trunkPadding + '#' + trunkPadding);

  // Join all lines with newline character, except the last line
  return result.join('\n');
}
