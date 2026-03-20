import TreeNode from './树节点定义'
function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return []
  let queue: TreeNode[] = [root]
  let result = []
  while (queue.length) {
    let res: number[] = []
    const currentLevelSize = queue.length // 关键：先缓存当前层的节点数量
    for (let i = 0; i < currentLevelSize; i++) {
      let data = queue.shift()!
      res.push(data.val)
      if (data.left) {
        queue.push(data.left)
      }
      if (data.right) {
        queue.push(data.right)
      }
    }
    result.push(res)
  }
  return result
}
export {}
