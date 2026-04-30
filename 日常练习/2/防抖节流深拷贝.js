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
        timer = null
      }, delay)
    }
  }
}

function deepClone(obj, map = new WeakMap()) {
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

  let keys = obj.keys()
  // 使用 Reflect.ownKeys() 可以遍历到 Symbol 类型的属性
  // let keys = Reflect.ownKeys(obj)
  for (const key of keys) {
    result[key] = deepClone(obj[key], map)
  }
  return result
}
