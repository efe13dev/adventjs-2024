interface Instruction {
  cmd: string;
  args: string[];
}

export function compile(instructions: string[]): number | undefined {
  const registers: Record<string, number> = {};
  const parsedInstructions: Instruction[] = instructions.map((instruction) => {
    const [cmd, ...args] = instruction.split(' ');
    return { cmd, args };
  });

  const getValue = (x: string): number => {
    const num = Number(x);
    return Number.isFinite(num) ? num : registers[x] ?? 0;
  };

  for (let i = 0; i < parsedInstructions.length; i++) {
    // eslint-disable-next-line @typescript-eslint/prefer-destructuring -- Prefer destructuring
    const { cmd, args } = parsedInstructions[i];

    const actions: Record<string, () => void> = {
      MOV: () => {
        registers[args[1]] = getValue(args[0]);
      },
      INC: () => {
        registers[args[0]] = getValue(args[0]) + 1;
      },
      DEC: () => {
        registers[args[0]] = getValue(args[0]) - 1;
      },
      JMP: () => {
        if (getValue(args[0]) === 0) {
          i = Number(args[1]) - 1;
        }
      }
    };

    actions[cmd]();
  }

  return registers.A;
}
