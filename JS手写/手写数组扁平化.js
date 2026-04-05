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

// const flat = (arr, initVal) => {
// const startVal = initVal || [];
// return arr.reduce((prevRes, item) => {
// // 如果里层还是数组，递归调用自身
// if(Array.isArray(item)){
// return flat(item, prevRes);
// }else{
// return prevRes.concat(item);
// }
// }, startVal)
// }
