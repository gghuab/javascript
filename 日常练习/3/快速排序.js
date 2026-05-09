function quickSort(arr) {
  function partition(left, right) {
    if (left >= right) return
    let pivotIndex = left + Math.floor(Math.random() * (right - left + 1))
    ;[arr[right], arr[pivotIndex]] = [arr[pivotIndex], arr[right]]

    let pivot = arr[right]

    let i = left
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
    ;[arr[i], arr[right]] = [arr[right], arr[i]]
    partition(left, i - 1)
    partition(i + 1, right)
  }
  partition(0, arr.length - 1)
  return arr
}
