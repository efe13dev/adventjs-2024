export function createFrame(names: string[]): string {
  // Si no hay palabras, devolver un marco vacío
  if (names.length === 0) return '****\n****';

  // Encontrar la longitud de la palabra más larga
  const maxLength = Math.max(...names.map((word) => word.length));

  // Calcular el ancho total del marco (palabra más larga + 4 caracteres para '* ' y ' *')
  const frameWidth = maxLength + 4;

  // Crear la línea superior e inferior del marco
  const borderLine = '*'.repeat(frameWidth);

  // Crear las líneas con las palabras
  const framedWords = names.map((word) => {
    // Calcular cuántos espacios necesitamos después de la palabra
    const padding = maxLength - word.length;
    return `* ${word}${' '.repeat(padding)} *`;
  });

  // Combinar todo el marco y unir con saltos de línea
  return [borderLine, ...framedWords, borderLine].join('\n');
}
