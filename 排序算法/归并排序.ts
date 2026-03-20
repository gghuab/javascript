import ISorted from './utils.js'
function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr //递归终止条件

  //递归切割数组
  const middle = Math.floor(arr.length / 2)
  const leftArr = arr.slice(0, middle)
  const rightArr = arr.slice(middle)
  const newleftArr = mergeSort(leftArr)
  const newrightArr = mergeSort(rightArr)

  //首次来到这里，数组内只剩一个元素，开始合并
  let left = 0
  let right = 0
  let newArr: number[] = []
  //创建双指针和空数组

  while (left < newleftArr.length && right < newrightArr.length) {
    //两个数组都没有到尽头，才一直比
    if (newleftArr[left] <= newrightArr[right]) {
      newArr.push(newleftArr[left])
      left++
    } else {
      newArr.push(newrightArr[right])
      right++
    }
  }
  //退出while后，判断另一个数组到没到尽头，没到的话，要把剩余的都push进去
  if (left < newleftArr.length) {
    newArr.push(...newleftArr.slice(left))
  }
  if (right < newrightArr.length) {
    newArr.push(...newrightArr.slice(right))
  }

  return newArr
}
console.log(ISorted(mergeSort))
