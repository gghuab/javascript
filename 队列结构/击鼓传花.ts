import ArrayQueue from './数组实现.js'
function hotPotato<T>(elements: T[], num: number) {
  const queue = new ArrayQueue<T>()
  for (let i = 0; i < elements.length; i++) {
    queue.enqueue(elements[i])
  }
  while (queue.size() > 1) {
    for (let i = 1; i < num; i++) {
      const el = queue.dequeue()
      if (el) {
        queue.enqueue(el)
      }
    }
    queue.dequeue()
  }
  return queue.dequeue()
}
console.log(hotPotato<string>(['a', 'b', 'c', 'd', 'e', 'f'], 3))
