export function detectBombs(grid: boolean[][]): number[][] {
  const rows = grid.length;
  const cols = grid[0].length;

  function isValidCell(
    row: number,
    col: number,
    rows: number,
    cols: number
  ): boolean {
    return row >= 0 && row < rows && col >= 0 && col < cols;
  }

  // Crear matriz de resultados inicializada en cero
  const bombCount = Array.from({ length: rows }, (): number[] =>
    Array.from({ length: cols }, () => 0)
  );
  // Coordenadas de celdas adyacentes
  const adjacentCells = [
    [-1, -1],
    [-1, 0],
    [-1, 1],
    [0, -1],
    [0, 1],
    [1, -1],
    [1, 0],
    [1, 1]
  ];

  // Recorrer cada celda de la cuadrícula
  grid.forEach((row, rowIndex) => {
    row.forEach((hasBomb, colIndex) => {
      // Si hay una bomba, incrementar celdas adyacentes
      if (hasBomb) {
        adjacentCells.forEach(([dx, dy]) => {
          const newRow = rowIndex + dx;
          const newCol = colIndex + dy;

          if (isValidCell(newRow, newCol, rows, cols)) {
            bombCount[newRow][newCol]++;
          }
        });
      }
    });
  });

  return bombCount;
}
