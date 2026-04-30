// function curry(fn, ...args) {
//   return function curried(...newArgs) {
//     let curArg = [...args, ...newArgs]
//     if (curArg.length >= fn.length) {
//       //这里吧函数的length写成了size
//       return fn.apply(this, curArg) //这里漏了return
//     } else {
//       return curry(fn, ...curArg) //这里也漏了return
//     }
//   }
// }
function curry(fn, ...args) {
  return function curried(...newArgs) {
    let curArgs = [...args, ...newArgs]
    if (curArgs.length >= fn.length) {
      return fn.apply(this, curArgs)
    } else {
      return curry(fn, ...curArgs)
    }
  }
}
