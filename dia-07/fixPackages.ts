/* eslint-disable @typescript-eslint/prefer-for-of --
 * Traditional for loop is used here to have precise control over index access
 * and to perform complex array manipulation that requires index-based iteration.
 * This provides more flexibility than a standard for...of loop.
 */
/* eslint-disable @typescript-eslint/no-non-null-assertion --
 * Non-null assertion is used after careful validation to indicate
 * that a value is definitely not null or undefined.
 * Use with caution and only when you are absolutely certain.
 */
export function fixPackages(packages: string): string {
  const result: string[] = [];
  const stack: number[] = [];

  for (let i = 0; i < packages.length; i++) {
    if (packages[i] === '(') {
      stack.push(result.length);
    } else if (packages[i] === ')') {
      if (stack.length > 0) {
        const startIndex = stack.pop()!;
        const segment = result.slice(startIndex).reverse();
        result.splice(startIndex);
        result.push(...segment);
      }
    } else {
      result.push(packages[i]);
    }
  }

  return result.join('');
}
