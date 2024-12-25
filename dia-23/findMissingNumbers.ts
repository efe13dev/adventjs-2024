function findMissingNumbers(numbers: number[]): number[] {
  // Si el array está vacío, no hay números perdidos
  if (numbers.length === 0) return [];

  // Encontrar el número más grande en el array
  const maxNum = Math.max(...numbers);
  
  // Crear un Set con los números del array para búsqueda eficiente
  const numSet = new Set(numbers);
  
  // Array para almacenar los números perdidos
  const missingNumbers: number[] = [];
  
  // Verificar cada número desde 1 hasta el máximo
  for (let i = 1; i <= maxNum; i++) {
    if (!numSet.has(i)) {
      missingNumbers.push(i);
    }
  }
  
  return missingNumbers;
}

export default findMissingNumbers;
