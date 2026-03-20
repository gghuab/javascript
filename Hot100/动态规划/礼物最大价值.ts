function jewelleryValue(frame: number[][]): number {
  let m = frame.length
  let n = frame[0].length
  //定义状态
  const dp: number[][] = Array.from({ length: m }, () => {
    return Array(n).fill(0)
  })
  dp[0][0] = frame[0][0]

  //状态初始化
  for (let i = 1; i < m; i++) {
    dp[i][0] = frame[i][0] + dp[i - 1][0]
  }
  for (let j = 1; j < n; j++) {
    dp[0][j] = frame[0][j] + dp[0][j - 1]
  }

  //状态转移方程
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = frame[i][j] + Math.max(dp[i - 1][j], dp[i][j - 1])
    }
  }
  return dp[m - 1][n - 1]
}
