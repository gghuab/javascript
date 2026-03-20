import ISorted from './utils.js'
function heapSort(arr: number[]): number[] {
  //原地建堆
  for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
    heavyDown(arr, i, arr.length)
  }
  //交换堆顶和堆尾元素，然后对新的堆顶元素下滤
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp
    heavyDown(arr, 0, i)
  }

  return arr
}

function heavyDown(arr: number[], startIndex: number, length: number) {
  while (startIndex * 2 + 1 < length) {
    let leftChildIndex = startIndex * 2 + 1
    let rightChildIndex = startIndex * 2 + 2
    let largerIndex = leftChildIndex
    if (rightChildIndex < length && arr[leftChildIndex] < arr[rightChildIndex]) {
      largerIndex = rightChildIndex
    }
    if (arr[startIndex] < arr[largerIndex]) {
      let temp = arr[startIndex]
      arr[startIndex] = arr[largerIndex]
      arr[largerIndex] = temp
      startIndex = largerIndex
    } else {
      break
    }
  }
}
console.log(ISorted(heapSort))
