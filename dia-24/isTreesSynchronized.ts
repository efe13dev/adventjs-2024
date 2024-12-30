interface Tree {
  value: string;
  left?: Tree;
  right?: Tree;
}

function isTreesSynchronized(
  tree1: Tree | undefined,
  tree2: Tree | undefined
): [boolean, string] {
  // Verificación explícita de nulos
  if (tree1 === undefined || tree2 === undefined) {
    return [tree1 === tree2, ''];
  }

  if (tree1.value !== tree2.value) {
    return [false, tree1.value];
  }

  const isMirrored =
    isTreeMirror(tree1.left, tree2.right) &&
    isTreeMirror(tree1.right, tree2.left);

  return [isMirrored, tree1.value];
}

function areBothUndefined(left?: Tree, right?: Tree): boolean {
  return left === undefined && right === undefined;
}

function haveDifferentValue(left?: Tree, right?: Tree): boolean {
  return left?.value !== right?.value;
}

// eslint-disable-next-line complexity -- Se deshabilita la regla de complejidad por preferencia de código
function isTreeMirror(left?: Tree, right?: Tree): boolean {
  if (areBothUndefined(left, right)) return true;
  if (haveDifferentValue(left, right)) return false;
  return (
    isTreeMirror(left?.left, right?.right) &&
    isTreeMirror(left?.right, right?.left)
  );
}

export type { Tree };
export { isTreesSynchronized };
