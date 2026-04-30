function flat(nums) {
  let result = []
  function flated(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        flated(arr[i])
      } else {
        result.push(arr[i])
      }
    }
  }
  flated(nums) // 必须在这里启动原数组的遍历
  return result
}

//去重1 (使用 filter)
function arrayqu1(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index // 箭头函数里加了花括号就必须写 return
  })
}
//去重2 (使用 Map)
function arrayqu2(arr) {
  let map = new Map()
  let result = []
  for (const item of arr) {
    if (!map.has(item)) {
      result.push(item)
      map.set(item, true)
    }
  }
  return result
}
