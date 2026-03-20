import { LinkedList } from '../链表结构/链表'
class DoublyNode<T> {
  value: T
  next: DoublyNode<T> | null = null
  prev: DoublyNode<T> | null = null
  constructor(value: T) {
    this.value = value
  }
}
class DoublyLinkedList<T> extends LinkedList<T> {
  head: DoublyNode<T> | null = null
  tail: DoublyNode<T> | null = null
  size: number = 0
  get length(): number {
    return this.size
  }
  getNodeAt(index: number): DoublyNode<T> | null {
    let current = this.head
    for (let i = 0; i < index && current; i++) {
      current = current.next
    }
    return current
  }
  append(value: T): void {
    const newNode = new DoublyNode<T>(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      this.tail!.next = newNode
      newNode.prev = this.tail
      this.tail = newNode
    }
    this.size++
  }
  prepend(value: T): void {
    const newNode = new DoublyNode<T>(value)
    if (!this.head) {
      this.head = newNode
      this.tail = newNode
    } else {
      newNode.next = this.head
      this.head.prev = newNode
      this.head = newNode
    }
    this.size++
  }
  postTraverse(): void {
    let current = this.tail
    let values: T[] = []
    while (current) {
      values.push(current.value)
      current = current.prev
    }
    console.log(values.join('->'))
  }
  insert(position: number, value: T): boolean {
    if (position < 0 || position > this.size) {
      return false
    }
    if (position === 0) {
      this.prepend(value)
      return true
    } else if (position === this.size) {
      this.append(value)
      return true
    } else {
      const newNode = new DoublyNode<T>(value)
      let current = this.getNodeAt(position)
      newNode.prev = current!.prev
      newNode.next = current
      current!.prev!.next = newNode
      current!.prev = newNode
      this.size++
      return true
    }
  }
  removeAt(position: number): T | null {
    if (position < 0 || position >= this.size) {
      return null
    }
    if (position === 0) {
      if (this.size === 1) {
        const value = this.head!.value
        this.head = null
        this.tail = null
        this.size--
        return value
      } else {
        const value = this.head!.value
        this.head = this.head!.next
        this.head!.prev = null
        this.size--
        return value
      }
    } else if (position === this.size - 1) {
      this.tail = this.tail!.prev
      const value = this.tail!.next!.value
      this.tail!.next = null
      this.size--
      return value
    } else {
      let current = this.getNodeAt(position)
      const value = current!.value
      current!.prev!.next = current!.next
      current!.next!.prev = current!.prev
      this.size--
      return value
    }
  }
}
