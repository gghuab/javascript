function productExceptSelf(nums: number[]): number[] {
  let answer: number[] = [] //定义结果数组
  const n = nums.length
  answer[0] = 1 //初始化
  //一开始answer[i]表示nums[i]左侧所有元素的乘积和
  for (let i = 1; i < n; i++) {
    answer[i] = answer[i - 1] * nums[i - 1]
  }

  //开始第二轮，定义一个R作为nums[i]右侧所有元素的乘积和
  let R = 1 //初始化为1
  for (let j = n - 1; j >= 0; j--) {
    answer[j] = answer[j] * R
    R *= nums[j]
  }

  return answer
}
