const flat = (arr, result = []) => {
  for (let item of arr) {
    if (Array.isArray(item)) {
      flat(item, result) // 递归，直接操作同一个 result 引用
    } else {
      result.push(item) // push 的性能远高于 concat
    }
  }
  return result
}
// const flat = (arr) => {
//   let result = []
//   function arrayFlat(arr) {
//     for (let item of arr) {
//       if (Array.isArray(item)) {
//         arrayFlat(item) // 递归，直接操作同一个 result 引用
//       } else {
//         result.push(item) // push 的性能远高于 concat
//       }
//     }
//   }
//   arrayFlat(arr)
//   return result
// }
