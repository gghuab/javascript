class MinStack {
  private stack: number[] = []
  private miniStack: number[] = []
  constructor() {}
  //维护一个辅助栈，用于存储较小元素
  push(val: number): void {
    // 正常压入主栈
    this.stack.push(val)
    //如果辅助栈为空或者是比此时的栈顶元素小，则存入
    //注意这里必须是 <= (包含等于)，因为最小值可能有重复
    if (this.miniStack.length === 0 || val <= this.miniStack[this.miniStack.length - 1]) {
      this.miniStack.push(val)
    }
  }

  pop(): void {
    // 1. 弹出主栈栈顶
    const num = this.stack.pop()
    // 2. 检查是否需要更新辅助栈
    // 如果刚才弹出的元素就是当前的最小值，那么 minStack 也要弹出
    if (num === this.miniStack[this.miniStack.length - 1]) {
      this.miniStack.pop()
    }
  }

  top(): number {
    return this.stack[this.stack.length - 1]
  }

  getMin(): number {
    return this.miniStack[this.miniStack.length - 1]
  }
}
