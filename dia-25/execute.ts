function execute(code: string): number {
  let value = 0; // Valor inicial
  const stack: number[] = []; // Pila para manejar bucles
  const instructions: string[] = code.split(''); // Dividir el código en instrucciones
  let pointer = 0; // Puntero para recorrer las instrucciones

  while (pointer < instructions.length) {
    const instruction = instructions[pointer];

    switch (instruction) {
      case '>':
        pointer++; // Mover al siguiente carácter
        break;
      case '+':
        value++; // Incrementar el valor
        pointer++;
        break;
      case '-':
        value--; // Decrementar el valor
        pointer++;
        break;
      case '[':
        if (value === 0) {
          // Saltar al siguiente carácter después de ']'
          let openBrackets = 1;
          while (openBrackets > 0) {
            pointer++;
            if (instructions[pointer] === '[') openBrackets++;
            if (instructions[pointer] === ']') openBrackets--;
          }
        } else {
          stack.push(pointer); // Guardar la posición del bucle
          pointer++;
        }
        break;
      case ']':
        if (value !== 0) {
          // Volver a la posición del bucle
          pointer = stack[stack.length - 1];
        } else {
          stack.pop(); // Salir del bucle
          pointer++;
        }
        break;
      case '{':
        if (value === 0) {
          // Saltar al siguiente carácter después de '}'
          let openBraces = 1;
          while (openBraces > 0) {
            pointer++;
            if (instructions[pointer] === '{') openBraces++;
            if (instructions[pointer] === '}') openBraces--;
          }
        } else {
          pointer++;
        }
        break;
      case '}':
        pointer++;
        break;
      default:
        pointer++; // Ignorar caracteres no reconocidos
    }
  }

  return value; // Devolver el valor final
}

export default execute;
