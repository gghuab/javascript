function debounce(fn, delay) {
  let timer = null
  return function (...args) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, args)
    }, delay)
  }
}
function throttle(fn, delay) {
  let timer = null
  return function (...args) {
    if (!timer) {
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null // 这行代码必须执行，否则节流阀永远无法重置
      }, delay)
    }
  }
}

function deepClone(obj, map = new WeakMap()) {
  // 1. 如果是基本数据类型，直接返回 (注意：typeof null 也是 'object')
  if ((typeof obj !== 'object' && typeof obj !== 'function') || obj === null) {
    return obj
  }

  if (obj instanceof RegExp) return new RegExp(obj)
  if (obj instanceof Date) return new Date(obj)

  if (map.has(obj)) {
    return map.get(obj)
  }
  let result = Array.isArray(obj) ? [] : {}
  map.set(obj, result)

  let keys = Object.keys(obj) //Reflect.ownKeys(obj)更好

  for (const key of keys) {
    // 3. 这里必须把 map 传下去，否则循环引用无法解决
    result[key] = deepClone(obj[key], map)
  }
  return result
}
