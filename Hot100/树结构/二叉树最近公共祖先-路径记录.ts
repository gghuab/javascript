import TreeNode from './树节点定义'
function lowestCommonAncestorIterative(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || p === null || q === null) return null

  // Map<当前节点, 父节点>
  const parentMap = new Map<TreeNode, TreeNode | null>()
  // 根节点的父节点为 null
  parentMap.set(root, null)

  // 使用栈辅助遍历 (DFS)
  const stack: TreeNode[] = [root]

  // 循环直到 p 和 q 都被我们需要记录父节点的 Map 找到
  while (!parentMap.has(p) || !parentMap.has(q)) {
    const node = stack.pop()
    if (!node) continue

    if (node.left) {
      parentMap.set(node.left, node) // 记录左孩子的父节点
      stack.push(node.left)
    }
    if (node.right) {
      parentMap.set(node.right, node) // 记录右孩子的父节点
      stack.push(node.right)
    }
  }

  // Set 用于存储 p 的所有祖先节点
  const ancestors = new Set<TreeNode>()

  // 从 p 向上回溯，收集所有祖先
  let curr: TreeNode | null | undefined = p
  while (curr) {
    ancestors.add(curr)
    curr = parentMap.get(curr) // 移动到父节点
  }

  // 从 q 向上回溯，查看其祖先是否在 p 的祖先集合中
  curr = q
  while (curr) {
    if (ancestors.has(curr)) {
      return curr // 找到的第一个共同祖先即为“最近”公共祖先
    }
    curr = parentMap.get(curr)
  }

  return null
}
