export function inBox(box: string[]): boolean {
  const [first, ...middle] = box;
  const last = middle.pop() ?? '#';

  // Validar tamaño y bordes
  if (
    box.length < 3 ||
    first !== '#'.repeat(first.length) ||
    last !== '#'.repeat(last.length)
  ) {
    return false;
  }

  return middle.some(
    (row) =>
      row.startsWith('#') &&
      row.endsWith('#') &&
      row.indexOf('*') > 0 &&
      row.indexOf('*') < row.length - 1
  );
}
