Function.prototype.myapply = function (newThis, args) {
  if (newThis === null || newThis === undefined) {
    // Node 环境
    newThis = globalThis
  } else {
    newThis = Object(newThis) //包装成一个对象把函数挂载到他的属性上
  }

  // 1. Bug: 不应该写死 'fn'，万一原来的对象里本来就有个叫 'fn' 的属性，就被你覆盖了
  // 最佳实践：使用 Symbol 产生一个独一无二的键名
  let key = Symbol('fn')
  newThis[key] = this

  // 2. Bug: apply 的第二个参数可以不传，如果是 undefined，...args 展开会直接报错
  args = args || []

  // 3. Bug: 执行完必须要删除刚才添加的那个临时属性，否则会造成对象的永久性污染
  let result = newThis[key](...args)
  delete newThis[key]

  return result
}

Function.prototype.mycall = function (newThis, ...args) {
  if (newThis === null || newThis === undefined) {
    // Node 环境
    newThis = globalThis
  } else {
    newThis = Object(newThis) //包装成一个对象把函数挂载到他的属性上
  }

  // 1. 最佳实践：使用 Symbol 产生一个独一无二的键名
  let key = Symbol('fn')
  newThis[key] = this

  // 2. 没有第二参数的 undefined 问题，可以直接解构
  // (因为 ...args 即使一个参数都没传，它也是个空数组 [])

  // 3. 执行完必须要删除刚才添加的临时属性
  let result = newThis[key](...args)
  delete newThis[key]

  return result
}

Function.prototype.mybind = function (context, ...args) {
  // 1. 致命Bug：你得提前把原函数 (this) 保存下来
  const fn = this

  return function (...newArgs) {
    const curArgs = [...args, ...newArgs]
    // 2. 如果这里直接用 fn，它就能找到外层保存好的原函数引用了
    return fn.apply(context, curArgs)
  }
}
