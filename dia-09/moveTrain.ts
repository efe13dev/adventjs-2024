export type Space = '·' | '@' | '*' | 'o';
export type Board = Space[][];
type Movement = 'U' | 'D' | 'R' | 'L';
type Result = 'none' | 'crash' | 'eat';

export function moveTrain(board: Board, mov: Movement): Result {
  const findLocomotive = (board: Board): [number, number] => {
    for (let r = 0; r < board.length; r++) {
      const c = board[r].indexOf('@');
      if (c !== -1) return [r, c];
    }
    return [-1, -1];
  };

  const getNextPosition = (
    r: number,
    c: number,
    mov: Movement
  ): [number, number] => {
    const moves = {
      U: [-1, 0],
      D: [1, 0],
      L: [0, -1],
      R: [0, 1]
    } as const;
    const {
      [mov]: [dr, dc]
    } = moves;
    return [r + dr, c + dc];
  };

  const isOutOfBounds = (r: number, c: number, board: Board): boolean =>
    r < 0 || r >= board.length || c < 0 || c >= board[0].length;

  const checkMove = (space: Space): Result =>
    space === '@' || space === 'o' ? 'crash' : space === '*' ? 'eat' : 'none';

  const [r, c] = findLocomotive(board);
  const [newR, newC] = getNextPosition(r, c, mov);

  if (isOutOfBounds(newR, newC, board)) return 'crash';
  return checkMove(board[newR][newC]);
}
