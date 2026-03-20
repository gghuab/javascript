//以下API的回调函数的第三个参数均为数组本身

Array.prototype.myForEach = function (callback, thisArg) {
  // 1. 基本检查：确保 callback 是个函数
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  // 2. 这里的 this 就是调用 myForEach 的那个数组
  const array = this
  const len = array.length

  // 3. 遍历数组
  for (let i = 0; i < len; i++) {
    // 检查索引i对应的值是否为空 （处理空位，如 [1, , 3]）
    if (i in array) {
      // 4. 执行回调，通过 call 绑定 thisArg
      callback.call(thisArg, array[i], i, array)
    }
  }
}
Array.prototype.myMap = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  const array = this
  const len = array.length
  // 1. 创建一个新数组，长度相同
  const res = new Array(len)

  for (let i = 0; i < len; i++) {
    if (i in array) {
      // 2. 将回调的返回值赋给新数组的对应索引
      res[i] = callback.call(thisArg, array[i], i, array)
    }
  }

  // 3. 返回新数组
  return res
}

Array.prototype.myFilter = function (callback, thisArg) {
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  const array = this
  const len = array.length
  // 1. 创建新数组用来存放符合条件的元素
  const res = []
  
  for (let i = 0; i < len; i++) {
    if (i in array) {
      // 2. 执行回调，如果结果为 true（或真值），则 push
      if (callback.call(thisArg, array[i], i, array)) {
        res.push(array[i])
      }
    }
  }

  return res
}
