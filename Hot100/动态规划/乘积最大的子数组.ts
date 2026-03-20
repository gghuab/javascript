function maxProduct(nums: number[]): number {
  //维护一个最大值一个最小值，最大值乘正的等于最大，最小值乘负数可能最大
  let imax = nums[0]
  let imin = nums[0]
  //最终最大值
  let max = nums[0]

  //从第二个元素开始遍历
  for (let i = 1; i < nums.length; i++) {
    const product1 = nums[i] * imax
    const product2 = nums[i] * imin

    imax = Math.max(product1, product2, nums[i])
    imin = Math.min(product1, product2, nums[i])

    max = Math.max(imax, max)
  }

  return max
}

// function maxProduct(nums: number[]): number {
//   //维护一个最大值一个最小值，最大值乘正的等于最大，最小值乘负数可能最大
//   let dp1 = [nums[0]]
//   let dp2 = [nums[0]]
//   //最终最大值
//   let max = dp1[0]

//   //从第二个元素开始遍历
//   for (let i = 1; i < nums.length; i++) {
//     dp1[i] = Math.max(dp1[i - 1] * nums[i], dp2[i - 1] * nums[i], nums[i])
//     dp2[i] = Math.min(dp1[i - 1] * nums[i], dp2[i - 1] * nums[i], nums[i])

//     max = Math.max(dp1[i], max)
//   }

//   return max
// }
