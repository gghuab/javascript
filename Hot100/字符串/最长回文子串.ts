function longestPalindromeSubseq(s: string): string {
  let maxLength = 0
  let start = 0
  for (let i = 0; i < s.length; i++) {
    const length1 = centerExpand(s, i, i)
    const length2 = centerExpand(s, i, i + 1)
    const max = Math.max(length1, length2)
    if (max > maxLength) {
      maxLength = max
      start = i - Math.floor((max - 1) / 2)
    }
  }

  return s.slice(start, start + maxLength)
}

function centerExpand(s: string, left: number, right: number) {
  while (left >= 0 && right < s.length && s[left] === s[right]) {
    left--
    right++
  }
  return right - left - 1
}
