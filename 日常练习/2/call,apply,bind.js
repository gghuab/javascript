Function.prototype.mycall = function (context, ...args) {
  if (context === null || context === undefined) {
    context = globalThis
  } else {
    context = Object(context)
  }

  // 必须用 typeof 判断 this 是否是函数，因为箭头函数或者不是函数的对象调用会导致错误
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  let fn = this

  let fnSymbol = Symbol('fn')

  context[fnSymbol] = fn

  let res = context[fnSymbol](...args)

  delete context[fnSymbol]

  return res
}
Function.prototype.myapply = function (context, args) {
  if (context === null || context === undefined) {
    context = globalThis
  } else {
    context = Object(context)
  }

  // 必须用 typeof 判断 this 是否是函数，因为箭头函数或者不是函数的对象调用会导致错误
  if (typeof this !== 'function') {
    throw new TypeError('Error')
  }

  let fn = this

  let fnSymbol = Symbol('fn')

  context[fnSymbol] = fn

  let res = context[fnSymbol](...arg)

  delete context[fnSymbol]

  return res
}
