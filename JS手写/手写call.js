// 在 Function 的原型上挂载自定义的 myCall 方法
//主要的原理就是把函数挂载到context对象上，然后调用这个函数，此时函数内部的this就指向了context对象，最后再删除这个临时属性，返回结果。
Function.prototype.myCall = function (context, ...args) {
  // 1. 处理传入的 context 为 null 或 undefined 的情况
  // 在非严格模式下，传入 null/undefined 时，this 指向全局对象（浏览器中为 window，Node 中为 global）
  // globalThis 是一个跨环境的全局对象引用
  if (context === null || context === undefined) {
    context = globalThis
  } else {
    // 2. 如果传入的是基础数据类型（如数字 1，字符串 'a'），需要将其包装成对象，否则无法添加属性
    context = Object(context)
  }

  // 3. 生成一个独一无二的属性名，防止覆盖 context 对象上原有的同名属性
  const fnSymbol = Symbol('fn')

  // 4. 将当前函数（即调用 myCall 的函数，也就是 this）作为属性赋值给 context
  context[fnSymbol] = this

  // 5. 执行这个函数，并传入参数，此时函数内部的 this 已经指向了 context
  const result = context[fnSymbol](...args)

  // 6. 执行完毕后，删除这个临时添加的属性，避免污染对象
  delete context[fnSymbol]

  // 7. 返回函数的执行结果
  return result
}
