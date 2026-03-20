import ArratStack from './数组实现'
function isValid(s: string): boolean {
  const stack = new ArratStack<string>()
  for (let i = 0; i < s.length; i++) {
    const c = s[i]
    switch (c) {
      case '(':
        stack.push(')')
        break
      case '{':
        stack.push('}')
        break
      case '[':
        stack.push(']')
        break
      default:
        if (c !== stack.pop()) {
          return false
        }
        break
    }
  }
  return stack.isEmpty()
}
