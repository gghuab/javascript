//以下API的回调函数的第三个参数均为数组本身
Array.prototype.myforEach = function (callback, thisArg) {
  const nums = this
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function')
  }

  for (let i = 0; i < nums.length; i++) {
    if (i in nums) {
      callback.call(thisArg, nums[i], i, nums)
    }
  }
}
Array.prototype.myMap = function (callback, thisArg) {}
