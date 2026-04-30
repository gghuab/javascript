console.log(formatWithLoop(12345678)) // "12,345,678"
console.log(formatWithLoop(-1234.56)) // "-1,234.56"

function formatWithLoop(num) {
  let str = String(num)
  let isNegative = false
  if (str.startsWith('-')) {
    isNegative = true
    str = str.slice(1) //把负号切割掉
  }
  let [intNum, noInt] = str.split('.') //切割整数部分和小数部分
  //没有小数的话noInt为undefined

  let count = 0
  let result = ''
  for (let i = intNum.length - 1; i >= 0; i++) {
    count++
    // 1. 语义修正：这里建议使用 intNum[i]，虽然你用 str[i] 碰巧因为前缀重叠没报错，但逻辑上应该取 intNum
    result = intNum[i] + result
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result
    }
  }
  if (isNegative) result = '-' + result
  // 2. 致命Bug：之前 split('.') 把小数点切掉了，拼回去的时候必须补上小数点！
  if (noInt) result += '.' + noInt
  return result
}
