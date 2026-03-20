function singleNumber(nums: number[]): number {
  let result: number = 0
  //任何数与0异或等于他本身，与本身异或为0
  //一直异或下去，则可以得到只出现一次的数
  for (const num of nums) {
    result = result ^ num
  }
  return result
}
