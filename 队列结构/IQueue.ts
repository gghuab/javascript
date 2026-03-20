interface IQueue<T> {
  enqueue(item: T): void
  dequeue(): T | undefined
  peek(): T | undefined
  isEmpty(): boolean
  size(): number
}
export default IQueue
