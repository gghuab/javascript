import TreeNode from './树节点定义'
function maxPathSum(root: TreeNode | null): number {
  let max = -Infinity
  function dfs(node: TreeNode | null): number {
    if (!node) return 0 //递归结束的条件

    let leftSum = Math.max(dfs(node.left), 0) //左右子树的和
    let rightSum = Math.max(dfs(node.right), 0)

    const pathSum = node.val + leftSum + rightSum //经过某个节点的路径最大和为该节点的值加上左右子树所能提供的和

    max = Math.max(pathSum, max) //保存最大值

    return node.val + Math.max(leftSum, rightSum) // 每个节点能提供的最大和为本身的值加上左右字数中较大的那个和
  }
  dfs(root)
  return max
}
export {}
