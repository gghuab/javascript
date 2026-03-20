import Heap from '../堆结构/最大堆结构.js'

class PriorityQueue<T> {
  private queue: Heap<T> = new Heap()
  enqueue(value: T) {
    this.queue.insert(value)
  }
  dequeue(): T | undefined {
    return this.queue.extract()
  }
  size(): number {
    return this.queue.size()
  }
  peek(): T | undefined {
    return this.queue.peek()
  }
  isEmpty(): Boolean {
    return this.queue.isEmpty()
  }
}
class Student {
  constructor(public name: string, public score: number) {}
  valueOf() {
    return this.score
  }
}
const p2 = new Student('xiaoming', 90)
const p1 = new Student('lihua', 99)
const p3 = new Student('lihua', 22)
const queue = new PriorityQueue<Student>()
queue.enqueue(p1)
queue.enqueue(p2)
queue.enqueue(p3)
console.log(queue)
