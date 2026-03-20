function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0
  //定义三种状态的最大收益，昨天持有，昨天卖出，昨天空手且未交易
  //初始化第0天的状态
  let hold: number = -prices[0] //第0天买入
  let sold: number = 0 //第0天不可能卖出
  let rest: number = 0 //第0天没有交易

  for (let i = 1; i < prices.length; i++) {
    let newHold: number = Math.max(hold, rest - prices[i])
    //今天持有有两种可能，1是昨天买的今天没动，2是昨天没交易，今天买了
    let newSold: number = hold + prices[i]
    //今天卖，只可能是昨天持有，今天卖了，所有昨天持有的收益加今天卖的钱
    let newRest: number = Math.max(rest, sold)
    //今天空闲，可能是昨天也空闲，也可能是昨天卖了今天冷冻
    hold = newHold
    sold = newSold
    rest = newRest
    //更新状态
  }
  return Math.max(sold, rest)
  //最后一天要么是卖出，要么昨天卖了今天是冷冻期休息
}
