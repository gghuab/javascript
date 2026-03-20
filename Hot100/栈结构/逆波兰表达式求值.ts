function evalRPN(tokens: string[]): number {
  let stack: number[] = []
  for (let i = 0; i <= tokens.length; i++) {
    const token = tokens[i]
    if (token === '+') {
      const num1 = stack.pop()!
      const num2 = stack.pop()!
      const num = num2 + num1
      stack.push(num)
    } else if (token === '-') {
      const num1 = stack.pop()!
      const num2 = stack.pop()!
      const num = num2 - num1
      stack.push(num)
    } else if (token === '*') {
      const num1 = stack.pop()!
      const num2 = stack.pop()!
      const num = num2 * num1
      stack.push(num)
    } else if (token === '/') {
      const num1 = stack.pop()!
      const num2 = stack.pop()!
      const num = Math.trunc(num2 / num1)
      stack.push(num)
    } else {
      stack.push(Number(token))
    }
  }
  return stack.pop()!
}
