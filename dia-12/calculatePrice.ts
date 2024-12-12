export function calculatePrice(ornaments: string): number | undefined {
  // Definir el valor de cada adorno
  const values: Record<string, number> = {
    '*': 1, // Copo de nieve
    o: 5, // Bola de Navidad
    '^': 10, // Arbolito decorativo
    '#': 50, // Guirnalda brillante
    '@': 100 // Estrella polar
  };

  // Verificar si hay caracteres desconocidos
  if ([...ornaments].some((char) => !(char in values))) {
    return undefined;
  }

  let total = 0;
  const chars = [...ornaments];

  for (let i = 0; i < chars.length; i++) {
    const { [chars[i]]: currentValue } = values;
    const { [chars[i + 1]]: nextValue } = values;

    // Si el siguiente adorno tiene mayor valor, restamos el valor actual
    // Si no, sumamos el valor actual
    total += nextValue > currentValue ? -currentValue : currentValue;
  }

  return total;
}
