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

Array.prototype.myReduce = function (callback, initialValue) {
  // 1. 如果数组为空，且没传初始值，原生 reduce 会报错
  if (this.length === 0 && arguments.length < 2) {
    throw new TypeError('Reduce of empty array with no initial value')
  }

  // 测试的注释
  // 2. 判断有没有传 initialValue (用 arguments.length 才是最严谨的)
  let hasInitialValue = arguments.length >= 2

  // 3. 设定累加器的初始值
  let acc = hasInitialValue ? initialValue : this[0]

  // 4. 设定循环的起始索引
  let startIndex = hasInitialValue ? 0 : 1

  // 5. 开始遍历计算
  for (let i = startIndex; i < this.length; i++) {
    // 传给 callback 4 个参数：累加值、当前值、当前索引、原数组
    acc = callback(acc, this[i], i, this)
  }

  // 6. 返回最终结果
  return acc
}
