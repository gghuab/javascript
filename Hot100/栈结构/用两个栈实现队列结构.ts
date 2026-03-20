class MyQueue {
  private stack1: number[] = []
  private stack2: number[] = []
  constructor() {}

  push(x: number): void {
    this.stack1.push(x)
  }

  pop(): number {
    if (this.stack2.length > 0) {
      return this.stack2.pop()!
    } else if (this.stack1.length > 0) {
      while (this.stack1.length > 0) {
        const item = this.stack1.pop()!
        this.stack2.push(item)
      }
      return this.stack2.pop()!
    } else {
      return -1
    }
  }
  peek(): number {
    if (this.stack2.length > 0) {
      return this.stack2[this.stack2.length - 1]
    } else {
      while (this.stack1.length > 0) {
        const item = this.stack1.pop()!
        this.stack2.push(item)
      }
      return this.stack2[this.stack2.length - 1]
    }
  }

  empty(): boolean {
    return this.stack1.length === 0 && this.stack2.length === 0
  }
}
