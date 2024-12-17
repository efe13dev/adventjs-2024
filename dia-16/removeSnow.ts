export function removeSnow(s: string): string {
  // Convertimos el string a un array para manipular más fácilmente
  const snowPiles = s.split('');
  let hasChanges = true;

  // Mientras haya cambios por hacer, seguimos iterando
  while (hasChanges) {
    hasChanges = false;

    // Recorremos el array buscando montículos adyacentes iguales
    for (let i = 0; i < snowPiles.length - 1; i++) {
      if (snowPiles[i] === snowPiles[i + 1]) {
        // Eliminamos los dos montículos iguales
        snowPiles.splice(i, 2);
        hasChanges = true;
        break; // Rompemos el ciclo para empezar de nuevo con el array modificado
      }
    }
  }

  // Convertimos el array de vuelta a string
  return snowPiles.join('');
}
