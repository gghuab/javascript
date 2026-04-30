function sortVersionsDesc(versions: string[]): string[] {
  // 使用 sort 方法进行自定义排序
  return versions.sort((v1, v2) => {
    // 1. 将版本号按 '.' 分割成数组
    const parts1 = v1.split('.')
    const parts2 = v2.split('.')

    // 2. 获取两个版本号中较长的那个分段长度，用于循环
    const maxLength = Math.max(parts1.length, parts2.length)

    // 3. 从左到右逐个分段进行比较
    for (let i = 0; i < maxLength; i++) {
      // 4. 将字符串转为数字。如果某一个版本号较短，对应的位会是 undefined，此时默认取 0
      const num1 = parseInt(parts1[i] || '0', 10)
      const num2 = parseInt(parts2[i] || '0', 10)

      // 5. 比较大小（降序：大的排在前面）
      if (num1 > num2) {
        return -1 // v1 大，v1 排在前面
      }
      if (num1 < num2) {
        return 1 // v2 大，v2 排在前面
      }
      // 如果相等，则进入下一次循环，比较下一位
    }

    // 6. 如果所有位都相等，则认为版本号相同
    return 0
  })
}

// 测试用例
const input: string[] = ['2.1.0.1', '0.402.1', '10.2.1', '5.1.2', '1.0.4.5']
const output: string[] = sortVersionsDesc(input)

console.log('输入:', input)
console.log('输出:', output)
