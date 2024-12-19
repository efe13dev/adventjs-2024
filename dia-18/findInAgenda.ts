/* eslint-disable @typescript-eslint/strict-boolean-expressions -- Se deshabilita la regla de strict-boolean-expressions por preferencia de código */

interface Result {
  name: string;
  address: string;
}

function findInAgenda(agenda: string, phone: string): Result | null {
  // Función para extraer el número de teléfono
  function extractPhoneNumber(line: string): string | null {
    const phoneMatch = /\+\d{1,2}-\d{3}-\d{3}-\d{3}/.exec(line);
    return phoneMatch ? phoneMatch[0] : null;
  }

  // Función para extraer el nombre
  function extractName(line: string): string | null {
    const nameMatch = /<([^>]+)>/.exec(line);
    return nameMatch ? nameMatch[1] : null;
  }

  // Función para extraer la dirección
  function extractAddress(line: string, phoneNumber: string): string {
    return line
      .replace(phoneNumber, '')
      .replace(/<[^>]+>/, '')
      .trim();
  }

  // Función para procesar una línea individual
  function processLine(line: string, searchPhone: string): Result | null {
    const phoneNumber = extractPhoneNumber(line);
    if (!phoneNumber?.includes(searchPhone)) return null;

    const name = extractName(line);
    if (!name) return null;

    const address = extractAddress(line, phoneNumber);
    return { name, address };
  }
  const lines = agenda.split('\n');

  for (const line of lines) {
    const result = processLine(line, phone);
    if (result) return result;
  }

  return null;
}

export default findInAgenda;
