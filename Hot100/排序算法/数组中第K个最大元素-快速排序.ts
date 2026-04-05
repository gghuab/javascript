function findKthLargest(nums: number[], k: number): number {
  //寻找第k个最大元素，实际上就是找到排序后的数组，下标为n-k的元素
  //比如第一个最大元素，实际上就是下标为n-1的元素
  const n = nums.length
  const targetIndex = n - k

  function quickSort(left: number, right: number) {
    if (left >= right) {
      return nums[left]
    }
    
    //取随机一个在left和right之间的index作为此次的pivot
    let randomIdx = left + Math.floor(Math.random() * (right - left + 1))
    let pivot = nums[randomIdx]

    swap(nums, randomIdx, right) //把这个pivot交换到最右边
    //下面就是快速排序
    let i = left
    let j = right - 1

    while (i <= j) {
      while (nums[i] < pivot) {
        i++
      }
      while (nums[j] > pivot) {
        j--
      }

      if (i <= j) {
        swap(nums, i, j)
        i++
        j--
      }
    }
    swap(nums, i, right)
    //一次排序完成后，检查此次排好的元素的下标是否是我们需要找到的那个下标，如果不是，则继续排序
    if (i === targetIndex) {
      return nums[i]
    } else if (i < targetIndex) {
      //要找的值在右边
      return quickSort(i + 1, right)
    } else {
      //要找的在左边
      return quickSort(left, j)
    }
  }

  return quickSort(0, n - 1)
  
}
function swap(nums: number[], i: number, j: number) {
  const temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
