function flattenObj(obj) {
  // 1. 防御：基本类型或 null 直接返回
  if (typeof obj !== 'object' || obj === null) {
    return obj
  }

  const res = {}

  function flatten(currObj, prefix) {
    // 2. 核心：只提取 key 组成一维数组，用 for...of 遍历
    for (const key of Object.keys(currObj)) {
      // 手动通过 key 拿到 value
      const value = currObj[key]

      // 3. 区分数组和对象的拼接方式
      const newKey = Array.isArray(currObj) ? `${prefix}[${key}]` : prefix ? `${prefix}.${key}` : key

      // 4. 判断是否继续递归
      if (typeof value === 'object' && value !== null) {
        flatten(value, newKey)
      } else {
        res[newKey] = value
      }
    }
  }

  // 启动：最外层调用，前缀初始为空字符串
  flatten(obj, '')
  return res
}
