function jump(n: number): number {
  //定义状态
  //设置初始化状态
  //循环里写状态方程
  //计算结果
  let pre = 1
  let cur = 1
  for (let i = 2; i <= n; i++) {
    const newValue = pre + cur
    pre = cur
    cur = newValue
  }
  return cur
}
