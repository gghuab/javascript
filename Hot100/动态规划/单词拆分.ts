function wordBreak(s: string, wordDict: string[]): boolean {
  const wordSet = new Set(wordDict)

  let dp: boolean[] = new Array(s.length + 1).fill(false)
  //0-s.length是s.length+1个，默认初始化为false
  //状态代表的是单词s的前i个字母是否可以被拆分拆成字典里的单词

  //状态初始化
  dp[0] = true //前0个也就是空字符串一定能被拆分

  for (let i = 1; i <= s.length; i++) {
    for (let j = 0; j < i; j++) {
      //前j个可以被拆分，并且从第j+1个到第i个，数组里有，这就表明前i个可以被拆分
      if (dp[j] && wordSet.has(s.substring(j, i))) {
        dp[i] = true
        break //只要找到一个拆分方法，则退出
      }
    }
  }

  return dp[s.length]
}
