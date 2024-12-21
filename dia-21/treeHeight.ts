interface TreeNode {
  value: string;
  left: TreeNode | null;
  right: TreeNode | null;
}

function treeHeight(tree: TreeNode | null): number {
  // Si el árbol está vacío, la altura es 0
  if (tree === null) return 0;

  // Calculamos la altura del subárbol izquierdo y derecho
  const leftHeight = treeHeight(tree.left);
  const rightHeight = treeHeight(tree.right);

  // La altura del árbol es el máximo entre la altura del subárbol
  // izquierdo y derecho, más 1 por el nodo actual
  return Math.max(leftHeight, rightHeight) + 1;
}

export default treeHeight;
