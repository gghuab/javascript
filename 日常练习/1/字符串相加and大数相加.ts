function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1
  let j = num2.length - 1
  let carry: number = 0
  let result: string[] = []

  while (i >= 0 || j >= 0 || carry > 0) {
    let number1: number = parseInt(num1[i] || '0')
    // 致命Bug：这里应该是 num2[j]，而不是 num2[i]
    let number2: number = parseInt(num2[j] || '0')

    let sum = number1 + number2 + carry

    carry = Math.floor(sum / 10)

    result.push(String(sum % 10))
    i--
    j--
  }

  return result.reverse().join('')
}
function addStrings2(num1: string, num2: string) {
  let i = num1.length - 1 // num1 的尾部指针
  let j = num2.length - 1 // num2 的尾部指针
  let carry = 0 // 进位
  let result = '' // 存储结果的字符串

  // 只要还有没遍历完的数字，或者还有进位，就继续循环
  while (i >= 0 || j >= 0 || carry > 0) {
    // 注意：TypeScript 环境下 parseInt 的参数必须是 string
    let digit1 = parseInt(num1[i] || '0')
    let digit2 = parseInt(num2[j] || '0')

    // 计算当前位的总和
    let sum = digit1 + digit2 + carry

    // 更新进位（相加大于等于10，进位为1，否则为0）
    carry = Math.floor(sum / 10)

    // 取个位数拼接到结果的最前面
    // 这里借用了 JS 将数字与字符串相加时的隐式转换机制
    result = (sum % 10) + result

    // 指针左移
    i--
    j--
  }

  return result
}
