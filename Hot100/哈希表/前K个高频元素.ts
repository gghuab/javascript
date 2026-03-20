function topKFrequent(nums: number[], k: number): number[] {
  let countMap = new Map<number, number>()

  for (const num of nums) {
    //统计每个字出现的个数
    countMap.set(num, (countMap.get(num) || 0) + 1)
  }
  //
  let countArr: number[][] = Array.from({ length: nums.length + 1 }, () => [])

  for (const [num, count] of countMap) {
    countArr[count].push(num)
  }
  let result: number[] = []
  for (let i = countArr.length - 1; i >= 0; i--) {
    if (countArr[i].length > 0) {
      result.push(...countArr[i])
    }
    if (result.length >= k) {
      return result.slice(0, k)
    }
  }

  return result
}
