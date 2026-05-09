function formatWithLoop(num) {
  let numStr = String(num)
  let isNegative = false
  if (numStr.startsWith('-')) {
    numStr.slice(1)
    isNegative = true
  }
  let nums = numStr.split('.')

  const [intNum, littleNum] = nums

  let result = ''
  let count = 0
  for (let i = intNum.length - 1; i >= 0; i--) {
    count++
    result = intNum[i] + result
    if (count % 3 === 0 && i !== 0) {
      result = ',' + result
    }
  }
  if (isNegative) result = '-' + result

  if (littleNum) result = result + '.' + littleNum

  return result
}
