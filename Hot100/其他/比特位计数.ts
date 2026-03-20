function countBits(n: number): number[] {
  let result: number[] = []
  for (let i = 0; i <= n; i++) {
    if (i === 0) {
      result.push(0)
      continue
    }
    let count: number = 0
    while (i !== 0) {
      i &= i - 1
      count++
    }
    result.push(count)
  }
  return result
}
