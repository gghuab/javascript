function flat(nums) {
  let result = []
  function flated(nums) {
    for (const item of nums) {
      if (Array.isArray(item)) {
        flated(item)
      } else {
        result.push(item)
      }
    }
  }
  flated(nums)
  return result
}

function flat(nums, result = []) {
  for (const item of nums) {
    if (Array.isArray(item)) {
      flat(item, result)
    } else {
      result.push(item)
    }
  }
  return result
}
export {}

function arrayqu(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}

function arrayqu(arr) {
  let map = new Map()
  let result = []
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      result.push(arr[i])
    }
    map.set(arr[i], true)
  }
  // 致命Bug：忘记把去重后的结果抛出去了
  return result
}
