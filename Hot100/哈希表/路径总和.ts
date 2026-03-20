class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val
    this.left = left === undefined ? null : left
    this.right = right === undefined ? null : right
  }
}

function pathSum(root: TreeNode | null, targetSum: number): number {
  //前缀和以及其个数
  let prefixMap = new Map<number, number>()
  //为了应对根节点的值正好是targetSum的情况
  let totalPathCount = 0
  prefixMap.set(0, 1)
  //定义深度遍历函数
  function dfs(node: TreeNode | null, curSum: number) {
    if (!node) return 0
    //如果node不存在，直接return 0
    curSum = curSum + node.val
    //求当前的前缀和
    if (prefixMap.has(curSum - targetSum)) {
      totalPathCount += prefixMap.get(curSum - targetSum)!
    }
    prefixMap.set(curSum, (prefixMap.get(curSum) || 0) + 1)

    dfs(node.left, curSum)
    dfs(node.right, curSum)

    prefixMap.set(curSum, prefixMap.get(curSum)! - 1)
  }
  dfs(root, 0)
  return totalPathCount
}
