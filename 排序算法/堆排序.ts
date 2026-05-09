import ISorted from './utils.js'
function heapSort(arr: number[]): number[] {
  // 步骤一：原地建堆（构建最大堆）
  // 从最后一个非叶子节点开始，依次对每个节点执行下滤操作
  // 最后一个非叶子节点的索引公式为 Math.floor((length - 2) / 2)
  for (let i = Math.floor((arr.length - 2) / 2); i >= 0; i--) {
    heavyDown(arr, i, arr.length)
  }

  // 步骤二：排序阶段
  // 交换堆顶（最大值）和堆尾元素，此时最大值来到了数组末尾（已排序区）
  // i 表示当前有效堆的长度，每次循环后有效堆的大小减 1
  for (let i = arr.length - 1; i > 0; i--) {
    let temp = arr[0]
    arr[0] = arr[i]
    arr[i] = temp

    // 把最后一个元素换到堆顶后，可能破坏了最大堆的结构，需要对新的堆顶元素进行下滤以恢复最大堆特性
    heavyDown(arr, 0, i)
  }

  return arr
}

/**
 * 下滤操作 (Sift Down)
 * 目的是将当前节点调整到合适的位置，保持最大堆的性质（父节点大于等于子节点）
 * @param arr 数组
 * @param startIndex 开始下滤的节点索引
 * @param length 当前有效堆的长度（超出这个长度的元素被认为是已经排好序的）
 */
function heavyDown(arr: number[], startIndex: number, length: number) {
  // 只要该节点有左子节点，就有可能继续向下比较调整
  while (startIndex * 2 + 1 < length) {
    let leftChildIndex = startIndex * 2 + 1
    let rightChildIndex = startIndex * 2 + 2

    // 先假设左子节点是最大的子节点
    let largerIndex = leftChildIndex

    // 如果存在右子节点，并且右子节点的值大于左子节点，则将大值索引更新为右子节点
    if (rightChildIndex < length && arr[leftChildIndex] < arr[rightChildIndex]) {
      largerIndex = rightChildIndex
    }

    // 判断父节点（当前节点）与最大的子节点的大小关系
    if (arr[startIndex] < arr[largerIndex]) {
      // 若父节点小于它的最大子节点，说明不满足最大堆，进行交换
      let temp = arr[startIndex]
      arr[startIndex] = arr[largerIndex]
      arr[largerIndex] = temp

      // 更新 startIndex 到交换后的子节点位置，进入下一轮循环，继续下滤
      startIndex = largerIndex
    } else {
      // 否则，父节点已经大于等于它的所有子节点，说明处于合适的位置，可以结束下滤
      break
    }
  }
}
console.log(ISorted(heapSort))
