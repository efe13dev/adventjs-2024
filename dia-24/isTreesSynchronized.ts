interface Tree {
  value: string;
  left?: Tree;
  right?: Tree;
}

function isTreesSynchronized(
  tree1: Tree | undefined,
  tree2: Tree | undefined
): [boolean, string] {
  // Si uno de los árboles es nulo y el otro no, no son espejos
  if (!tree1 || !tree2) {
    return [tree1 === tree2, tree1?.value ?? ''];
  }

  // Si los valores de las raíces son diferentes, no son espejos
  if (tree1.value !== tree2.value) {
    return [false, tree1.value];
  }

  // Verificar si los subárboles son espejos
  const leftMirror = isTreeMirror(tree1.left, tree2.right);
  const rightMirror = isTreeMirror(tree1.right, tree2.left);

  // Los árboles son espejos si ambos subárboles son espejos
  return [leftMirror && rightMirror, tree1.value];
}

function isTreeMirror(left?: Tree, right?: Tree): boolean {
  // Si ambos son nulos, son espejos
  if (!left && !right) return true;

  // Si uno es nulo y el otro no, no son espejos
  if (!left || !right) return false;

  // Los nodos deben tener el mismo valor y sus subárboles deben ser espejos
  return (
    left.value === right.value &&
    isTreeMirror(left.left, right.right) &&
    isTreeMirror(left.right, right.left)
  );
}

export { isTreesSynchronized };
