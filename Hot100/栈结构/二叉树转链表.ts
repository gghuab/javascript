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
function flatten(root: TreeNode | null): void {
  if (!root) return
  let stack: TreeNode[] = [root]
  let previous: TreeNode | null = null
  while (stack.length) {
    const current = stack.pop()!
    if (previous) {
      previous.right = current
      previous.left = null
    }

    if (current.right) {
      stack.push(current.right)
    }
    if (current.left) {
      stack.push(current.left)
    }
    previous = current
  }
}
