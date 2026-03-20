function longestConsecutive(nums: number[]): number {
  const numSet = new Set(nums)

  let maxLength: number = 0

  for (const num of numSet) {
    let curNum = num
    let max = 0
    if (!numSet.has(curNum - 1)) {
      max = 1
      while (numSet.has(curNum + 1)) {
        max++
        curNum++
      }
      maxLength = Math.max(max, maxLength)
    }
  }

  return maxLength
}
