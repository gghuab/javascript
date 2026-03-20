import TreeNode from './树节点定义'
function invertTree(root: TreeNode | null): TreeNode | null {
  if (root === null) return null
  let stack: TreeNode[] = []
  stack.push(root)
  while (stack.length) {
    let node = stack.pop()!
    let left = node.left
    node.left = node.right
    node.right = left
    if (node.left) stack.push(node.left)
    if (node.right) stack.push(node.right)
  }
  return root
}
export {}
