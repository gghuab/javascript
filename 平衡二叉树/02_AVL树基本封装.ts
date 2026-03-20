import BSTree from './00_二叉搜索树的封装.js'
import AVLTreeNode from './01_AVL树节点封装.js'
class AVLTree<T> extends BSTree<T> {
  root: AVLTreeNode<T> | null = null
  insert(value: T): void {
    let newNode = new AVLTreeNode(value)
    if (!this.root) {
      //树为空
      this.root = newNode
    } else {
      //树不为空
      this.inserNode(this.root, newNode)
      this.checkBalance(newNode)
    }
  }

  checkBalance(node: AVLTreeNode<T>) {
    let current = node.parent
    while (current) {
      if (!current.isBalanced) {
        this.reBanlance(current)
      }
      current = current.parent
    }
  }

  reBanlance(root: AVLTreeNode<T>): void {
    let pivot = root.getHigherChild()
    let current = pivot?.getHigherChild()
    let resultNode: AVLTreeNode<T> | null = null
    if (pivot?.isLeft) {
      if (current?.isLeft) {
        //左左
        resultNode = root.rightRotation()
      } else {
        //左右
        pivot.leftRotation()
        resultNode = root.rightRotation()
      }
    } else {
      if (current?.isLeft) {
        //右左
        pivot?.rightRotation()
        resultNode = root.leftRotation()
      } else {
        resultNode = root.leftRotation()
      }
    }
    if (!resultNode?.parent) {
      this.root = resultNode
    }
  }
}
const avlTree = new AVLTree<number>()

for (let i = 0; i < 20; i++) {
  avlTree.insert(Math.floor(Math.random() * 200))
}
avlTree.print()
for (let i = 0; i < 5; i++) {
  avlTree.remove(Math.floor(Math.random() * 200))
}
avlTree.print()
