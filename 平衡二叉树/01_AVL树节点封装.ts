import { treeNode } from './00_二叉搜索树的封装.js'
export default class AVLTreeNode<T> extends treeNode<T> {
  value: T
  left: AVLTreeNode<T> | null = null
  right: AVLTreeNode<T> | null = null
  parent: AVLTreeNode<T> | null = null
  constructor(value: T) {
    super(value)
    this.value = value
  }
  get isLeft() {
    return this.parent && this.parent.left === this
  }
  get isRight() {
    return this.parent && this.parent.right === this
  }
  //获取每个节点的高度 -->等于左右子节点的高度的最大值加1
  private getHeight(): number {
    let leftHeight = this.left ? this.left.getHeight() : 0
    let rightHeight = this.right ? this.right.getHeight() : 0
    return Math.max(leftHeight, rightHeight) + 1
  }
  //获取平衡因子
  private get balanceFactor(): number {
    let leftHeight = this.left ? this.left.getHeight() : 0
    let rightHeight = this.right ? this.right.getHeight() : 0
    return leftHeight - rightHeight
  }
  //判断是否是平衡节点
  get isBalanced(): boolean {
    const bf = this.balanceFactor
    return bf >= -1 && bf <= 1
  }
  public getHigherChild(): AVLTreeNode<T> | null {
    const leftHeight = this.left ? this.left.getHeight() : 0
    const rightHeight = this.right ? this.right.getHeight() : 0
    if (leftHeight > rightHeight) {
      return this.left
    }
    if (leftHeight < rightHeight) {
      return this.right
    }
    return this.isLeft ? this.left : this.right
  }
  rightRotation(): AVLTreeNode<T> | null {
    const isLeft = this.isLeft
    const isRight = this.isRight

    //处理轴心节点
    const pivot = this.left!
    pivot.parent = this.parent

    //处理轴心节点的右节点---右旋
    this.left = pivot.right
    if (pivot.right) {
      pivot.right.parent = this
    }

    //处理不平衡节点()
    pivot.right = this
    this.parent = pivot

    //决定轴心节点的挂载位置，也就是判断一下之前不平衡节点是在他父节点的那一侧或者是根节点？
    if (!pivot.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else {
      pivot.parent.right = pivot
    }

    return pivot //把这个轴心节点返回出去，目的是为了可以在外面让整个树的根节点指向他
  }

  leftRotation(): AVLTreeNode<T> | null {
    const isLeft = this.isLeft
    const isRight = this.isRight

    //处理pivot 节点
    const pivot = this.right!
    pivot.parent = this.parent

    //处理pivot节点的左节点
    this.right = pivot.left
    if (pivot.left) pivot.left.parent = this

    //处理this节点
    pivot.left = this
    this.parent = pivot

    if (!pivot.parent) {
      return pivot
    } else if (isLeft) {
      pivot.parent.left = pivot
    } else {
      pivot.parent.right = pivot
    }

    return pivot
  }
}
