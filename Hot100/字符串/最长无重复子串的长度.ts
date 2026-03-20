function lengthOfLongestSubstring(s: string): number {
  let left = 0
  let map = new Map<string, number>()
  let maxLength = 0
  let maxStart = 0
  for (let right = 0; right < s.length; right++) {
    const rightStr = s[right]
    if (map.has(rightStr) && map.get(rightStr)! >= left) {
      left = map.get(rightStr)! + 1
    }
    map.set(rightStr, right)
    // maxLength = Math.max(maxLength, right - left + 1)
    //可以打印该子串
    if (right - left + 1 > maxLength) {
      maxLength = right - left + 1
      maxStart = left
    }
  }
  console.log(s.slice(maxStart, maxStart + maxLength))

  return maxLength
}
console.log(lengthOfLongestSubstring('abcabcdbb'))
