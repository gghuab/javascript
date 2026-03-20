function fib(n: number): number {
  //定义状态
  //设置初始化状态
  //循环里写状态方程
  //计算结果
  if (n <= 1) return n
  let pre = 0
  let cur = 1
  for (let i = 2; i <= n; i++) {
    const newValue = pre + cur
    pre = cur
    cur = newValue
  }
  return cur
}
console.log(fib(10))
export {}
