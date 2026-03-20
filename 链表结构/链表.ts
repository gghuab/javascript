class Node<T> {
  value: T
  next: Node<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}
export class LinkedList<T> {
  protected head: Node<T> | null = null
  protected size: number = 0
  protected tail: Node<T> | null = null
  get length(): number {
    return this.size
  }
  append(value: T): void {
    const newNode = new Node<T>(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.tail = newNode
    this.size++
  }
  traverse(): void {
    const values: T[] = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    console.log(values.join(' -> '))
  }
  insert(position: number, value: T): boolean {
    if (position < 0 || position > this.size) {
      return false
    }
    const newNode = new Node<T>(value)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      for (let i = 1; i < position; i++) {
        current = current!.next
      }
      newNode.next = current!.next
      current!.next = newNode
    }
    this.size++
    return true
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null
    }
    let result = this.head ?? null
    if (position === 0) {
      this.head = this.head!.next ?? null
    } else {
      let current = this.head
      for (let i = 1; i < position; i++) {
        current = current!.next
      }
      result = current!.next
      current!.next = current!.next!.next
    }
    this.size--
    return result!.value ?? null
  }
  get(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null
    }
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current!.next
    }
    return current!.value
  }
  update(position: number, value: T): boolean {
    if (position < 0 || position >= this.size) {
      return false
    }
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current!.next
    }
    current!.value = value
    return true
  }
  indexOf(value: T): number {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
  remove(value: T): boolean {
    const index = this.indexOf(value)
    if (index === -1) {
      return false
    }
    this.removeAt(index)
    return true
  }
  isEmpty(): boolean {
    return this.size === 0
  }
}
export default Node
const list = new LinkedList<number>()
list.append(10)
list.append(20)
list.append(30)
list.traverse() // 输出: 10 -> 20 -> 30
list.insert(2, 15)
list.traverse() // 输出: 10 -> 15 -> 20 -> 30
console.log(list.removeAt(1))
list.traverse() // 输出: 10 -> 20 -> 30
list.update(1, 25)
list.traverse() // 输出: 10 -> 25 -> 30
console.log(list.indexOf(30))
