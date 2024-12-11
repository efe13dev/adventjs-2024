export function decodeFilename(filename: string): string {
  // Find the position after the first underscore
  const startIndex = filename.indexOf('_') + 1;

  // Find the last dot to remove the extra extension
  const lastDotIndex = filename.lastIndexOf('.');

  // Extract the filename between the underscore and the last extension
  return filename.substring(startIndex, lastDotIndex);
}
