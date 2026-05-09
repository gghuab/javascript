function myinstanceof(left, right) {
  // 基础类型直接返回 false (因为原生 instanceof 对原始值如 1, "str" 会直接返回 false)
  if (left === null || (typeof left !== 'object' && typeof left !== 'function')) {
    return false
  }
  let proto = Object.getPrototypeOf(left)

  while (proto) {
    if (proto === right.prototype) {
      return true
    }
    proto = Object.getPrototypeOf(proto)
  }
  return false
}

function mynew(constructor, ...args) {
  let obj = Object.create(constructor.prototype)

  let res = constructor.call(obj, ...args)

  if (res !== null && (typeof res === 'function' || typeof res === 'object')) {
    return res
  }
  // 这里必须要写 return，否则就会隐式返回 undefined
  return obj
}
