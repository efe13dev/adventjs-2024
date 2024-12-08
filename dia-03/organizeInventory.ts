export interface Inventory {
  name: string;
  quantity: number;
  category: string;
}

export function organizeInventory(
  inventory: Inventory[]
): Record<string, Record<string, number>> {
  const result: Record<string, Record<string, number>> = {};

  for (const item of inventory) {
    if (!(item.category in result)) {
      result[item.category] = {};
    }
    result[item.category][item.name] =
      (typeof result[item.category][item.name] === 'number'
        ? result[item.category][item.name]
        : 0) + item.quantity;
  }

  return result;
}
