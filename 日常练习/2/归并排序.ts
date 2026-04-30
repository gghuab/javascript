function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums
  let mid = Math.floor(nums.length / 2)

  let leftArr = nums.slice(0, mid)
  let rightArr = nums.slice(mid)

  let newLeft = mergeSort(leftArr)
  let newRight = mergeSort(rightArr)

  let left: number = 0
  let right: number = 0
  let result: number[] = []

  while (left < newLeft.length && right < newRight.length) {
    if (newLeft[left] < newRight[right]) {
      result.push(newLeft[left])
      left++
    } else {
      result.push(newRight[right])
      right++
    }
  }
  if (left !== newLeft.length) result.push(...newLeft.slice(left))
  if (right !== newRight.length) result.push(...newRight.slice(right))
  return result
}
export {}
