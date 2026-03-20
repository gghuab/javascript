import IStack from './IStack.js'
// class ArrayStack<T> implements IStack<T> {
//   private items: T[] = []
//   //入栈
//   push(item: T): void {
//     this.items.push(item)
//   }
//   //出栈
//   pop(): T | undefined {
//     return this.items.pop()
//   }
//   //栈是否为空
//   isEmpty(): boolean {
//     return this.items.length === 0
//   }
//   //栈的大小
//   size(): number {
//     return this.items.length
//   }
//   //查看栈顶元素
//   peek(): T | undefined {
//     return this.items[this.items.length - 1]
//   }
// }
// export default ArrayStack
class ArrayStack<T> implements IStack<T> {
  private data: T[] = []
  push(item: T): void {
    this.data.push(item)
  }
  pop(): T | undefined {
    return this.data.pop()
  }
  isEmpty(): boolean {
    return this.data.length === 0
  }
  size(): number {
    return this.data.length
  }
  peek(): T | undefined {
    return this.data[this.data.length - 1]
  }
}
export default ArrayStack
const stack1 = new ArrayStack<number>()
function decToBir(num: number): string {
  while (num > 0) {
    const dec = num % 2
    stack1.push(dec)
    num = Math.floor(num / 2)
  }
  let dir = ''
  while (!stack1.isEmpty()) {
    dir += stack1.pop()
  }
  return dir
}
console.log(decToBir(35))
