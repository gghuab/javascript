function removeInvalidParentheses(s: string): string[] {
  //创建一个判断括号是否有效的函数
  const isValid = (str: string): boolean => {
    let count: number = 0
    for (const s of str) {
      if (s === '(') {
        count++
      } else if (s === ')') {
        count--
      }
      if (count < 0) return false //这里可以排除掉')('类似这种的情况
    }
    return count === 0
  }
  const queue: string[] = [s]
  const result: string[] = []
  const visited = new Set<string>()
  let found: boolean = true
  visited.add(s)

  while (queue.length > 0) {
    let currentSize = queue.length
    for (let i = 0; i < currentSize; i++) {
      const curStr: string = queue.shift()!
      if (isValid(curStr)) {
        result.push(curStr)
        found = true
      }

      if (found) continue

      for (let j = 0; j < curStr.length; j++) {
        const char = curStr[j]
        // 如果是字母，不需要删除，直接跳过
        if (char !== '(' && char !== ')') continue
        const newStr: string = curStr.slice(0, j) + curStr.slice(j + 1)
        if (!visited.has(newStr)) {
          visited.add(newStr)
          queue.push(newStr)
        }
      }
    }
    if (found) break
  }

  return result.length > 0 ? result : []
}
