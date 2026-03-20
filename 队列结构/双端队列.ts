import ArrayQueue from '../队列结构/数组实现.js'
class Deque<T> extends ArrayQueue<T> {
  enqueueFront(value: T) {
    this.data.unshift(value)
  }

  dequeueRear(): T | undefined {
    return this.data.pop()
  }
}
