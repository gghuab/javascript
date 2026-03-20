import { LinkedList } from './单链表重构'
class circularLinkedList<T> extends LinkedList<T> {
  append(value: T): void {
    super.append(value)
    this.tail!.next = this.head
  }
  insert(position: number, value: T): boolean {
    const result = super.insert(position, value)
    if (result && (position === this.size - 1 || position === 0)) {
      this.tail!.next = this.head
    }
    return result
  }
  removeAt(position: number): T | null {
    const result = super.removeAt(position)
    if (result !== null && this.size && (position === this.size || position === 0)) {
      this.tail!.next = this.head
    }
    return result
  }
}
