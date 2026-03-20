function maxSubArray(arr: number[]): number {
  let dp: number[] = []
  dp[0] = arr[0]

  for (let i = 1; i < arr.length; i++) {
    dp[i] = Math.max(arr[i], arr[i] + dp[i - 1])
  }

  return Math.max(...dp)
}
export {}
