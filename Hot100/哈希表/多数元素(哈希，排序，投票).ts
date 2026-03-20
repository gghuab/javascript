//哈希表
// function majorityElement(nums: number[]): number {
//   let mapNumber: Map<number, number> = new Map()
//   const n = nums.length
//   for (const num of nums) {
//     if (!mapNumber.has(num)) {
//       mapNumber.set(num, 1)
//     } else {
//       let current = mapNumber.get(num)!
//       mapNumber.set(num, ++current)
//     }
//     if (mapNumber.get(num)! > n / 2) {
//       return num
//     }
//   }

//   return -1
// }

//归并排序
// function majorityElement(nums: number[]): number {
//   function mergeSort(nums: number[]): number[] {
//     if (nums.length <= 1) {
//       return nums
//     }

//     const n = nums.length
//     const middle = Math.floor(n / 2)
//     let leftArr = nums.slice(0, middle)
//     let rightArr = nums.slice(middle)
//     let newleftArr = mergeSort(leftArr)
//     let newrightArr = mergeSort(rightArr)

//     let i = 0
//     let j = 0
//     let newArr: number[] = []
//     while (i < newleftArr.length && j < newrightArr.length) {
//       if (newleftArr[i] < newrightArr[j]) {
//         newArr.push(newleftArr[i])
//         i++
//       } else {
//         newArr.push(newrightArr[j])
//         j++
//       }
//     }

//     if (i < newleftArr.length) {
//       newArr.push(...newleftArr.slice(i))
//     }
//     if (j < newrightArr.length) {
//       newArr.push(...newrightArr.slice(j))
//     }
//     return newArr
//   }
//   const newArr = mergeSort(nums)
//   return newArr[Math.floor(nums.length / 2)]
// }

//摩尔投票
function majorityElement(nums: number[]): number {
  let targetNum: number = nums[0]
  let count: number = 0

  for (const num of nums) {
    // 如果当前票数为 0，说明之前的候选人不管是真是假，都已经被消耗光了
    // 我们选取当前数字作为新的候选人
    if (count === 0) {
      targetNum = num
    }
    // 如果当前数字是候选人，票数+1
    if (targetNum === num) {
      count++
    } // 如果当前数字不是候选人，票数-1（相互抵消）
    else {
      count--
    }
  }
  return targetNum // 题目保证一定存在多数元素，所以最后留下的  targetNum 就是答案
}
