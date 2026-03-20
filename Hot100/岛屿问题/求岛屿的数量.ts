function numIslands(grid: string[][]): number {
  //边界条件，如果数据不存在，行列为空，则返回0
  if (!grid || grid.length === 0 || grid[0].length === 0) {
    return 0
  }
  //定义行数和列数
  const row = grid.length
  const col = grid[0].length

  function dfs(r: number, c: number) {
    //如果越界，或者是该地区不是陆地而是海洋，则直接返回
    if (r < 0 || r >= row || c < 0 || c >= col || grid[r][c] === '0') {
      return
    }
    grid[r][c] = '0' //表示已经被搜索过的陆地
    //上下左右四个角递归搜索
    dfs(r, c - 1)
    dfs(r, c + 1)
    dfs(r - 1, c)
    dfs(r + 1, c)
  }

  let count = 0
  //开始遍历网格搜索岛屿
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (grid[i][j] === '1') {
        //找到一个岛屿，count++，并且开启dfs进行沉岛
        count++
        dfs(i, j)
      }
    }
  }
  return count
}
