import TreeNode from './树节点定义'
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  const left = root.left
  root.left = root.right
  root.right = left
  invertTree(root.left)
  invertTree(root.right)
  return root
}
