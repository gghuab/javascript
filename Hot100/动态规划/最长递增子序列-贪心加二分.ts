function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  let tail: number[] = []
  for (let i = 0; i < n; i++) {
    let left = 0
    let right = tail.length - 1

    while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      // 关键点: 这里必须是 <=
      // 含义: 我们要找的是 tail 中第一个 "大于等于" nums[i] 的数
      // 如果改成 <，遇到相等的值会跳过，导致替换掉后面更大的数，
      // 从而产生重复元素 (例如 [2,5,8] 变成 [2,5,5])，破坏严格递增性质。
      if (nums[i] <= tail[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    }

    if (left === tail.length) {
      tail.push(nums[i])
    } else {
      tail[left] = nums[i]
    }
  }

  return tail.length
}
export {}
