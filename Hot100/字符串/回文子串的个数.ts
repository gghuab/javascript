function countSubstrings(s: string): number {
  let totalCount = 0
  //中心扩展法，没有超界限的情况下，左右相等，则向外扩展，并且计数+1
  function extendCenter(left: number, right: number) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--
      right++
      totalCount++
    }
  }
  //分为奇数和偶数两种情况
  for (let i = 0; i < s.length; i++) {
    extendCenter(i, i)
    extendCenter(i, i + 1)
  }

  return totalCount
}
