function rob(nums: number[]): number {
  //处理边界条件
  const n = nums.length
  if (n === 0) {
    return 0
  }
  if (n === 1) {
    return nums[0]
  }

  // //定义状态 dp[i]表示从下标为0到下标为i的房子，能偷取到的最大价值
  // let dp: number[] = []
  // //状态初始化
  // dp[0] = nums[0]
  // dp[1] = Math.max(nums[0], nums[1]) //偷第二个房子，要么是第一个房子，要么直接偷第二个房子
  // //状态转移,从下标为2的房子开始
  // for (let i = 2; i < n; i++) {
  //   dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
  // }
  // return dp[n - 1]

  //状态压缩的关键在于,定义之前的状态和现在的状态，每次循环吧现在的状态赋值给之前的状态
  let prev1 = 0
  let prev2 = 0

  for (const num of nums) {
    const current = Math.max(prev1, prev2 + num)
    prev2 = prev1
    prev1 = current
  }
  return prev1
}
export {}
