function quickSort(arr: number[]): number[] {
  function partition(left: number, right: number) {
    if (left >= right) {
      // return arr[left]
      return
    }
    let pivotIndex = left + Math.floor(Math.random() * (right - left + 1)) //在left和right中选一个随机数，作为pivot

    let temp = arr[right]
    arr[right] = arr[pivotIndex]
    arr[pivotIndex] = temp //把这个pivot交换到数组的最右侧

    const pivot = arr[right] //选择最后一个元素作为pivot

    let i = left
    let j = right - 1

    while (i <= j) {
      //左边找到一个比pivot大的，右边找到一个比pivot小的，
      while (arr[i] < pivot) {
        i++
      }
      while (arr[j] > pivot) {
        j--
      }
      
      if (i <= j) {
        //如果此时i还是小于等于J，则交换这两元素，使得小的在左边，大的在右边，
        // 交换了还要继续向前推进 也就是i++,j--
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
      }
    }
    //此时，中间位置为i，i左边一个是j
    //交换最右侧元素与中间位置元素
    const temp1 = arr[i]
    arr[i] = arr[right]
    arr[right] = temp1

    //此时i位置的元素的顺序就排好了，递归继续排序left到j(i-1),以及i+1到right
    partition(left, j)
    partition(i + 1, right)
  }

  partition(0, arr.length - 1)
  return arr
}
