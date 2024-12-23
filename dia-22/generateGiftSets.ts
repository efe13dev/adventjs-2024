function generateGiftSets(gifts: string[]): string[][] {
  const result: string[][] = [];

  function generate(start: number, current: string[]): void {
    // Si tenemos una combinación válida, la añadimos
    if (current.length > 0) {
      result.push([...current]);
    }

    // Generamos las combinaciones en el orden específico
    for (let i = start; i < gifts.length; i++) {
      current.push(gifts[i]);
      generate(i + 1, current);
      current.pop();
    }
  }

  // Iniciamos la generación
  generate(0, []);

  // Ordenamos por longitud manteniendo el orden relativo
  return result.sort((a, b) => a.length - b.length);
}

export default generateGiftSets;
