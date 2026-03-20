function findKthLargest(nums: number[], k: number): number {
  //数组维护成一个最大堆，然后对这个堆进行K-1次删除操作，则此时堆顶的元素就是第K个最大元素
  const n = nums.length
  //原地建堆，从第一个非叶子节点开始，一直下滤
  for (let i = Math.floor(n / 2 - 1); i >= 0; i--) {
    heavyDown(nums, i, n)
  }
  //进行k-1次删除操作
  for (let i = 1; i < k; i++) {
    nums[0] = nums.pop()!
    heavyDown(nums, 0, nums.length)
  }

  return nums[0]
}

//堆下滤的操作
function heavyDown(nums: number[], startIndex: number, length: number) {
  while (startIndex * 2 + 1 < length) {
    let left = startIndex * 2 + 1
    let right = startIndex * 2 + 2
    let largerIndex = left

    if (right < length && nums[right] > nums[left]) {
      largerIndex = right
    }

    if (nums[largerIndex] > nums[startIndex]) {
      swap(nums, largerIndex, startIndex)
      startIndex = largerIndex
    } else {
      break
    }
  }
}

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
export {}
