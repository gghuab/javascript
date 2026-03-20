function birnarySearch(arr: number[], target: number): number {
  let left = 0
  let right = arr.length - 1
  while (right >= left) {
    const mid = left + Math.floor((right - left) / 2)
    if (target === arr[mid]) {
      return mid
    } else if (target < arr[mid]) {
      right = mid - 1
    } else {
      left = mid + 1
    }
  }
  return -1
}
