function quickSort(arr) {
  function pariation(left, right) {
    if (left >= right) {
      return
    }

    let pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
    ;[arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]]

    let pivot = arr[right]

    let i = left // 错误1：这里应该是 left，而不是 0
    let j = right - 1
    while (i <= j) {
      while (arr[i] < pivot) {
        i++
      }

      while (arr[j] > pivot) {
        j--
      }

      if (i <= j) {
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
        i++
        j--
      }
    }

    // 错误2：基准值归位必须放在 while(i <= j) 循环的最外面！
    ;[arr[i], arr[right]] = [arr[right], arr[i]]

    // 错误3：归位后，基准值此时在 i 的位置。所以两边区间应该是 [left, i-1] 和 [i+1, right]
    pariation(left, j) //这里写j或者i-1都对！
    pariation(i + 1, right)
  }
  pariation(0, arr.length - 1)

  return arr // 建议补充：返回排序好的数组
}
export {}
