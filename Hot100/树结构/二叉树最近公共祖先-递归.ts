import TreeNode from './树节点定义'
function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (root === null || root === p || root === q) return root

  let left = lowestCommonAncestor(root.left, p, q) //去左子树找P Q
  let right = lowestCommonAncestor(root.right, p, q) //去右子树找P Q

  if (left !== null && right !== null) {
    //查找是自下而上的，如果在root的左右两边都找到了对应的p和q，那么说明root就是最近的公共祖先
    return root
  } else return left === null ? right : left
}
export {}
