function lengthOfLIS(nums: number[]): number {
  const n = nums.length
  if (n === 0) return 0

  // 1. 初始化 dp 数组，每个位置默认为 1
  const dp: number[] = Array(n).fill(1)

  let maxLen = 1

  // 2. 遍历每个位置 i
  for (let i = 1; i < n; i++) {
    // 3. 遍历 i 前面的所有位置 j
    // 为什么不能只找最近的一个比 nums[i] 小的数？
    // 反例: [1, 4, 5, 2, 6]
    // 计算 6 时，最近的小数是 2 (dp=2)，接上后长度为 3。
    // 但前面还有 5 (dp=3)，接上后长度为 4。
    // 所以必须遍历所有 j，找到 dp[j] 最大的那个。
    for (let j = 0; j < i; j++) {
      // 4. 如果 nums[j] < nums[i]，说明可以接在后面
      if (nums[j] < nums[i]) {
        // 状态转移
        dp[i] = Math.max(dp[i], dp[j] + 1)
      }
    }
    // 更新全局最大值
    maxLen = Math.max(maxLen, dp[i])
  }

  return maxLen
}
