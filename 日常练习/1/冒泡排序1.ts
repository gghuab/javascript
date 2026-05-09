function bubbleSort(arr: number[]): number[] {
  for (let i = arr.length - 1; i >= 1; i--) {
    let isSwap: boolean = false
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        isSwap = true
      }
    }
    if (!isSwap) break
  }
  return arr
}
export {}
