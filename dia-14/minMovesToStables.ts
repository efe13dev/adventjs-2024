export function minMovesToStables(
  reindeer: number[],
  stables: number[]
): number {
  // Ordenamos los establos de menor a mayor
  const sortedStables = [...stables].sort((a, b) => a - b);
  // Ordenamos los renos de menor a mayor
  const sortedReindeer = [...reindeer].sort((a, b) => a - b);

  // Calculamos la suma total de movimientos
  let totalMoves = 0;

  // Para cada reno, calculamos la distancia al establo asignado
  for (let i = 0; i < sortedReindeer.length; i++) {
    // El valor absoluto de la diferencia nos da el número de movimientos
    totalMoves += Math.abs(sortedReindeer[i] - sortedStables[i]);
  }

  return totalMoves;
}
