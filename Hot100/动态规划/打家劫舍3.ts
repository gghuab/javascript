import TreeNode from './TreeNode'
function rob(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): [number, number] {
    if (!node) return [0, 0]
    const left = dfs(node.left)
    const right = dfs(node.right)

    const robbed: number = node.val + left[1] + right[1]
    const notRobbed: number = Math.max(left[0], left[1]) + Math.max(right[0], right[1])

    return [robbed, notRobbed]
  }
  return Math.max(...dfs(root))
}
