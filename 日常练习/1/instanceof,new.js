function myinstanceof(left, right) {
  // 1. 边界防御：基本数据类型直接返回 false（例如：1 instanceof Number 是 false）
  if ((typeof left !== 'object' && typeof left !== 'function') || left === null) {
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
  const obj = Object.create(constructor.prototype)

  let result = constructor.apply(obj, args)

  // 2. 完善返回值判断规则：不仅对象类型（除了 null 以外）要返回，如果有返回函数时也要返回函数
  // 顺便加上 typeof result === 'function' 保障如果构造函数返回函数的话返回该函数
  if ((typeof result === 'object' && result !== null) || typeof result === 'function') {
    return result
  }
  return obj
}
