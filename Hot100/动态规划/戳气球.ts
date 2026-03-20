function maxCoins(nums: number[]): number {
  const n: number = nums.length
  const newNum: number[] = new Array(n + 2)
  newNum[0] = 1
  newNum[n + 1] = 1
  //创建新数组，两头是1中间为原数组
  for (let i = 1; i <= n; i++) {
    newNum[i] = nums[i - 1]
  }

  let dp: number[][] = Array.from({ length: n + 2 }, () => new Array(n + 2).fill(0))
  //创建状态，dp[i][j]为从开区间（i，j）戳气球所能获取的最多的钱

  for (let len = 2; len <= n + 1; len++) {
    //最小的len 因为最少有一个气球，那么算上两头的虚拟气球，i-j=2，最多中间有n个气球，i-j=n+1
    for (let i = 0; i <= n + 1 - len; i++) {
      let j = i + len //算右边界，最大为n+1
      for (let k = i + 1; k < j; k++) {
        const coins = dp[i][k] + dp[k][j] + newNum[i] * newNum[k] * newNum[j]
        dp[i][j] = Math.max(coins, dp[i][j])
      }
    }
  }
  return dp[0][n + 1]
}
