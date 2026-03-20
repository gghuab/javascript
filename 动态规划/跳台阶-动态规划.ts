function jump(n: number): number {
  //定义状态
  //设置初始化状态
  //循环里写状态方程
  //计算结果

  let dp: number[] = []
  dp[0] = 1
  dp[1] = 1
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2]
  }
  return dp[n]
}
export {}
