function curry(fn, ...args) {
  return function (...newArgs) {
    let curArgs = [...args, ...newArgs]
    if (curArgs.length >= fn.length) {
      return fn.apply(this, curArgs)
    } else {
      return curry(fn, ...curArgs)
    }
  }
}
