export default class Heap<T> {
  data: T[] = []
  private length: number = 0

  private swap(i: number, j: number) {
    const temp = this.data[i]
    this.data[i] = this.data[j]
    this.data[j] = temp
  }

  insert(value: T) {
    this.data.push(value)
    this.length++
    //上滤
    let index = this.length - 1
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2)
      if (this.data[index] > this.data[parentIndex]) {
        this.swap(index, parentIndex)
        index = parentIndex
      } else {
        break
      }
    }
  }

  heapifyDown(startIndex: number) {
    let index = startIndex
    while (index * 2 + 1 < this.length) {
      let leftChildIndex = index * 2 + 1
      let rightChildIndex = index * 2 + 2
      let largerIndex = leftChildIndex

      //有右子节点并且右子节点要大于左子节点的值
      if (rightChildIndex < this.length && this.data[leftChildIndex] < this.data[rightChildIndex]) {
        largerIndex = rightChildIndex
      }

      //判断index对应的值是否小于左右子节点中较大的那个值，小则交换，大则跳出
      if (this.data[index] < this.data[largerIndex]) {
        this.swap(index, largerIndex)
        index = largerIndex
      } else {
        break
      }
    }
  }
  extract(): T | undefined {
    if (this.length === 0) {
      return undefined
    }
    if (this.length === 1) {
      this.length--
      return this.data.pop()
    }

    let topValue = this.data[0]
    this.data[0] = this.data.pop()!
    this.length--
    //下滤
    this.heapifyDown(0)
    return topValue
  }
  peek(): T | undefined {
    return this.data[0]
  }
  size(): number {
    return this.length
  }
  isEmpty(): boolean {
    return this.length === 0
  }
  buildHeap(array: T[]) {
    this.data = array
    this.length = array.length
    for (let i = Math.floor((this.length - 2) / 2); i >= 0; i--) {
      this.heapifyDown(i)
    }
  }
}

const arr = [19, 100, 36, 17, 3, 25, 1, 2, 7]
const heap = new Heap<number>()
// for (const item of arr) {
//   heap.insert(item)
// }
// console.log(heap.data)
// while (!heap.isEmpty()) {
//   console.log(heap.extract())
// }
heap.buildHeap(arr)
console.log(heap.data)
