function decodeString(s: string): string {
  let curStr: string = '' //定义当前的字符串
  let curNum: number = 0 //定义当前的倍数

  let stack: [string, number][] = [] //定义存储之前任务的字母和倍数的栈

  for (const char of s) {
    if (char >= '0' && char <= '9') {
      //遍历到数字了
      curNum = curNum * 10 + +char
    } else if (char === '[') {
      //遍历到左括号了
      stack.push([curStr, curNum]) //存储之前的倍数和字符，去处理中括号里的任务
      curStr = ''
      curNum = 0
    } else if (char === ']') {
      const [preStr, prNum] = stack.pop()!
      curStr = preStr + curStr.repeat(prNum)
    } else {
      curStr += char
    }
  }
  return curStr
}
