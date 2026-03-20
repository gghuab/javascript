import Heap from '../堆结构/最大堆结构.js'
class PriorityNode<T> {
  constructor(public priority: number, public value: T) {}
  valueOf() {
    return this.priority
  }
}
class PriorityQueue<T> {
  private queue: Heap<PriorityNode<T>> = new Heap()
  enqueue(value: T, priority: number) {
    const node = new PriorityNode(priority, value)
    this.queue.insert(node)
  }
  dequeue(): T | undefined {
    return this.queue.extract()?.value
  }
  size(): number {
    return this.queue.size()
  }
  peek(): T | undefined {
    return this.queue.peek()?.value
  }
  isEmpty(): Boolean {
    return this.queue.isEmpty()
  }
}
