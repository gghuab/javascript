function findAnagrams(s: string, p: string): number[] {
  let result: number[] = []
  const sLen = s.length
  const pLen = p.length
  if (pLen > sLen) {
    return result
  }
  const aCode = 'a'.charCodeAt(0)
  const pCount = new Array(26).fill(0)
  const sCount = new Array(26).fill(0)
  //初始化滑动窗口
  for (let i = 0; i < pLen; i++) {
    pCount[p[i].charCodeAt(0) - aCode]++
    sCount[s[i].charCodeAt(0) - aCode]++
  }
  //辅助函数判断数组是否相等
  const equalArray = (num1: number[], num2: number[]): boolean => {
    for (let i = 0; i < 26; i++) {
      if (num1[i] !== num2[i]) {
        return false
      }
    }
    return true
  }

  if (equalArray(pCount, sCount)) {
    result.push(0)
  }

  for (let i = pLen; i < sLen; i++) {
    sCount[s[i].charCodeAt(0) - aCode]++
    sCount[s[i - pLen].charCodeAt(0) - aCode]--

    if (equalArray(pCount, sCount)) {
      result.push(i - pLen + 1)
    }
  }

  return result
}
