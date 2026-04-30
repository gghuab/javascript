function mergeSort(nums: number[]): number[] {
  if (nums.length <= 1) return nums

  // let left:number=0
  // let right:number=nums.length-1
  let mid: number = Math.floor(nums.length / 2)
  let leftArray: number[] = mergeSort(nums.slice(0, mid))
  let rightArray: number[] = mergeSort(nums.slice(mid))

  let left: number = 0
  let right: number = 0
  let result: number[] = []
  while (left < leftArray.length && right < rightArray.length) {
    if (leftArray[left] < rightArray[right]) {
      result.push(leftArray[left])
      left++
    } else {
      result.push(rightArray[right])
      right++
    }
  }

  if (left !== leftArray.length) result.push(...leftArray.slice(left))
  if (right !== rightArray.length) result.push(...rightArray.slice(right))

  return result
}
