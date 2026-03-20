import ISorted from './utils.js'
function insertSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    //从第二个元素开始，一直找到最后一个
    const num = arr[i] //保存需要插入的元素
    let j = i - 1 //找到需要插入的元素的前一个元素
    while (num < arr[j] && j >= 0) {
      //如果需要插入的元素比前一个元素，则前一个元素后移，继续向前比较
      arr[j + 1] = arr[j]
      j--
    }
    //上面已经J--了，所以此时空出来的位置是j+1，用要插入的元素赋值
    arr[j + 1] = num
  }
  return arr
}
console.log(ISorted(insertSort))
