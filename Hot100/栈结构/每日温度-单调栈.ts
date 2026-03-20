function dailyTemperatures(temperatures: number[]): number[] {
  let n = temperatures.length

  let res = Array(n).fill(0)

  let stack: number[] = []

  for (let i = 0; i < n; i++) {
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const preIndex = stack.pop()!
      res[preIndex] = i - preIndex
    }
    stack.push(i)
  }

  return res
}
