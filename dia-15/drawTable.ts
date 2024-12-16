function drawTable(data: Array<Record<string, string | number>>): string {
  if (data.length === 0) return '';

  // Get column names from the first object
  const columns = Object.keys(data[0]);

  // Calculate maximum width for each column including headers
  const columnWidths: Record<string, number> = {};
  columns.forEach((col) => {
    // Initialize with capitalized header length
    columnWidths[col] = col.length;
    // Check all values in this column
    data.forEach((row) => {
      const valueLength = String(row[col]).length;
      columnWidths[col] = Math.max(columnWidths[col], valueLength);
    });
  });

  // Create the separator line
  const separator =
    '+' +
    columns.map((col) => '-'.repeat(columnWidths[col] + 2)).join('+') +
    '+';

  // Create header row with capitalized column names
  const header =
    '| ' +
    columns
      .map((col) => {
        const capitalizedCol = col.charAt(0).toUpperCase() + col.slice(1);
        return capitalizedCol.padEnd(columnWidths[col]);
      })
      .join(' | ') +
    ' |';

  // Create data rows
  const rows = data.map(
    (row) =>
      '| ' +
      columns
        .map((col) => String(row[col]).padEnd(columnWidths[col]))
        .join(' | ') +
      ' |'
  );

  // Combine all parts

  return [separator, header, separator, ...rows, separator].join('\n');
}

export default drawTable;
