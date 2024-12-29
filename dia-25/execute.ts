// Funciones auxiliares
function execute(code: string): number {
  function handleLoop(
    instructions: string[],
    pointer: number,
    openChar: string,
    closeChar: string
  ): number {
    let openCount = 1;
    while (openCount > 0) {
      pointer++;
      if (instructions[pointer] === openChar) openCount++;
      if (instructions[pointer] === closeChar) openCount--;
    }
    return pointer;
  }

  interface ExecutionState {
    value: number;
    pointer: number;
    stack: number[];
    instructions: string[];
  }

  function processInstruction(
    instruction: string,
    state: ExecutionState
  ): void {
    switch (instruction) {
      case '+':
        state.value++;
        state.pointer++;
        break;
      case '-':
        state.value--;
        state.pointer++;
        break;
      case '[':
        if (state.value === 0) {
          state.pointer = handleLoop(
            state.instructions,
            state.pointer,
            '[',
            ']'
          );
        } else {
          state.stack.push(state.pointer);
        }
        state.pointer++;
        break;
      case ']':
        if (state.value !== 0) {
          state.pointer = state.stack[state.stack.length - 1];
        } else {
          state.stack.pop();
        }
        state.pointer++;
        break;
      case '{':
        if (state.value === 0) {
          state.pointer = handleLoop(
            state.instructions,
            state.pointer,
            '{',
            '}'
          );
        }
        state.pointer++;
        break;
      case '}':
        state.pointer++;
        break;
      default:
        state.pointer++;
        break;
    }
  }

  let value = 0;
  const stack: number[] = [];
  const instructions: string[] = code.split('');
  let pointer = 0;

  const state: ExecutionState = { value, pointer, stack, instructions };

  while (pointer < instructions.length) {
    processInstruction(instructions[pointer], state);
    ({ value } = state);
    ({ pointer } = state);
  }

  return value;
}

export default execute;
