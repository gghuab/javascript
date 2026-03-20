// function time(arr: number[]): number {
//   let dp: number[] = []
//   dp[0] = 0
//   let minPrice = arr[0]
//   for (let i = 1; i < arr.length; i++) {
//     dp[i] = arr[i] - minPrice
//     minPrice = Math.min(arr[i], minPrice)
//   }

//   return Math.max(...dp)
// }
function time(arr: number[]): number {
  let preValue = 0
  let minPrice = arr[0]
  for (let i = 1; i < arr.length; i++) {
    preValue = Math.max(arr[i] - minPrice, preValue)
    minPrice = Math.min(arr[i], minPrice)
  }

  return preValue
}
