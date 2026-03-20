function coinChange(coins: number[], amount: number): number {
  let dp: number[] = new Array(amount + 1).fill(Infinity)
  //dp[i]代表凑出金额i所需的最小的硬币个数
  //初始化为无穷大，表示现在每个金额还没凑
  dp[0] = 0

  for (let i = 1; i <= amount; i++) {
    for (const coin of coins) {
      if (i >= coin) {
        dp[i] = Math.min(dp[i], dp[i - coin] + 1)
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount]
}
