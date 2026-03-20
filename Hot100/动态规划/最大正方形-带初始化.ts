/**
 * 221. 最大正方形
 *
 * 在一个由 '0' 和 '1' 组成的二维矩阵内，找到只包含 '1' 的最大正方形，并返回其面积。
 *
 * 解题思路：
 * 使用动态规划，dp[i][j] 表示以 (i, j) 为右下角的最大正方形的边长
 *
 * 状态转移方程：
 * - 如果 matrix[i][j] === '1'
 *   dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
 * - 否则 dp[i][j] = 0
 *
 * 最后返回最大边长的平方
 */

function maximalSquare(matrix: string[][]): number {
  //处理边界 如果数据是空的，或者是矩阵的行数为0或者是列数为0，那么直接return 0
  if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
    return 0
  }

  //获取数组的行数和列数，初始化最大边长
  let row = matrix.length
  let col = matrix[0].length
  let maxSize = 0
  //状态定义全赋值为0
  let dp: number[][] = Array.from({ length: row }, () => {
    return Array(col).fill(0)
  })

  //状态初始化，初始化第一行和第一列，如果有1则对应的maxSize也为1
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === '1') {
      dp[i][0] = 1
      maxSize = 1
    }
  }
  for (let j = 0; j < col; j++) {
    if (matrix[0][j] === '1') {
      dp[0][j] = 1
      maxSize = 1
    }
  }

  //状态转移
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      //从第二行第二列开始遍历每个正方形
      if (matrix[i][j] === '1') {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1
      }
      maxSize = Math.max(dp[i][j], maxSize)
    }
  }

  return maxSize * maxSize
}
export {}
