function deepClone(obj, map = new WeakMap()) {
  //判断传入的是否是引用数据类型，不是则直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  //处理日期和正则
  if (obj instanceof Date) return new Date(obj)
  if (obj instanceof RegExp) return new RegExp(obj)

  //判断是否存过
  if (map.has(obj)) {
    return map.get(obj) //存在的话直接返回，处理重复引用的情况
  }

  //判断是数组还是对象
  let result = Array.isArray(obj) ? [] : {}

  map.set(obj, result) //先存下这个

  const keys = Object.keys(obj)

  for (const key of keys) {
    result[key] = deepClone(obj[key], map)
  }
  return result
}
