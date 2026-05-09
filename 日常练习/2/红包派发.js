/**
 * 派发红包 - 二倍均值法
 * @param {number} totalAmount 总金额（元）
 * @param {number} totalPeople 总人数
 * @returns {number[]} 每个人抢到的金额数组
 */
function dispatchRedPacket(totalAmount, totalPeople) {
  // 1. 参数校验：如果每人一分钱都不够，直接报错
  if (totalAmount < totalPeople * 0.01) {
    throw new Error('金额不足以分给所有人（每人最少0.01元）')
  }

  // 2. 解决精度问题：将金额单位从“元”转化为“分”，并使用 Math.round 防止浮点误差
  let remainingCents = totalAmount * 100
  let remainingPeople = totalPeople
  const result = []

  // 3. 开始派发（除了最后一个人，其他人都随机）
  for (let i = 0; i < totalPeople - 1; i++) {
    // 当前可分配的最大金额 = (剩余金额 / 剩余人数) * 2
    let doubleAvg = Math.floor((remainingCents / remainingPeople) * 2)

    // 极限保护：必须为剩下的人每人留 1 分钱
    let maxLimit = remainingCents - (remainingPeople - 1)
    //先算出来两个最大限度，然后在这两个最大限度里取最小值
    // 最终的随机上限不能超过极限保护值
    let max = Math.min(doubleAvg, maxLimit)

    // 随机获取当前金额：1 到 max 之间
    let amount = Math.floor(Math.random() * max) + 1

    // 存入结果并扣减状态
    result.push(amount / 100)
    remainingCents -= amount
    remainingPeople--
  }

  // 4. 最后一个人拿走剩下的所有钱
  result.push(remainingCents / 100)

  return result
}

// 测试
console.log('二倍均值法:', dispatchRedPacket(100, 10))
// 计算总和验证
const res1 = dispatchRedPacket(100, 10)
console.log('总和:', res1.reduce((a, b) => a + b, 0).toFixed(2))
