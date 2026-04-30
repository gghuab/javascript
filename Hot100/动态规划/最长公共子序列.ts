function longestCommonSubsequence(text1: string, text2: string): number {
  const m = text1.length
  const n = text2.length

  // dp[i][j] 表示 text1[0...i-1] 和 text2[0...j-1] 的最长公共子序列长度
  const dp: number[][] = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0))

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        // 如果字符相等，说明找到了一个公共字符，长度加1
        dp[i][j] = dp[i - 1][j - 1] + 1
      } else {
        // 如果字符不相等，则继承 text1 前一个字符或 text2 前一个字符的最长公共子序列长度的最大值
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
      }
    }
  }

  return dp[m][n]
}
