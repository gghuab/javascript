function findTargetSumWays(nums: number[], target: number): number {
  const sum: number = nums.reduce((pre, cur) => {
    return pre + cur
  })

  const bigSize: number = (target + sum) / 2

  if ((target + sum) % 2 !== 0 || Math.abs(target) > sum) {
    return 0
  }

  let dp: number[] = new Array(bigSize + 1).fill(0)

  dp[0] = 1

  for (const num of nums) {
    for (let i = bigSize; i >= num; i--) {
      dp[i] = dp[i] + dp[i - num]
    }
  }

  return dp[bigSize]
}
