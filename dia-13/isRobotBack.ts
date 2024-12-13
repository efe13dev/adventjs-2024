/* eslint-disable @typescript-eslint/prefer-destructuring -- Se deshabilita la regla de destructuring por preferencia de código */
/* eslint-disable complexity -- Se deshabilita la regla de complejidad ya que este algoritmo requiere múltiples condiciones para rastrear la posición del robot correctamente, y se deshabilita destructuring por preferencia de código */

export function isRobotBack(moves: string): true | [number, number] {
  let x = 0;
  let y = 0;
  const movimientos: Record<string, { x: number; y: number }> = {
    R: { x: 1, y: 0 },
    L: { x: -1, y: 0 },
    U: { x: 0, y: 1 },
    D: { x: 0, y: -1 }
  };

  const movimientosRealizados = new Set<string>();

  for (let i = 0; i < moves.length; i++) {
    const currentMove = moves[i];
    let move = currentMove;
    let intensidad = 1;

    // Procesar modificadores
    if (currentMove === '*') {
      intensidad = 2;
      move = moves[++i];
    } else if (currentMove === '!') {
      const nextMove = moves[++i];
      move = nextMove;
      intensidad = -1;
    } else if (currentMove === '?') {
      move = moves[++i];
      if (movimientosRealizados.has(move)) continue;
    }

    // Actualizar posición si el movimiento es válido
    if (move in movimientos) {
      x += movimientos[move].x * intensidad;
      y += movimientos[move].y * intensidad;
      movimientosRealizados.add(move);
    }
  }

  return x === 0 && y === 0 ? [0, 0] : [x, y];
}
