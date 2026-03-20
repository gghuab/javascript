Function.prototype.mybind = function (context, ...args) {
  const fn = this

  return function (...newArgs) {
    return fn.apply(context, [...args, ...newArgs])
    //为了拿到原先函数本来有的返回值
  }
}
