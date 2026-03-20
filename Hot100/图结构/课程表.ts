function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  //inDegree[i]表示i课程的入度，也就是学i课程需要几个依赖
  let inDegree: number[] = Array(numCourses).fill(0)
  //graph[i]表示以i课程作为先导课程的后续课程
  let graph: number[][] = Array.from({ length: numCourses }, () => [])
  //计算每个课程的入度(依赖)，以及每个课程的后续课程
  for (const [coures, pre] of prerequisites) {
    graph[pre].push(coures)
    inDegree[coures]++
  }

  //创建队列,把所有入度为0的课程添加进队列当中
  let queue: number[] = []
  for (let i = 0; i < inDegree.length; i++) {
    if (inDegree[i] === 0) {
      queue.push(i)
    }
  }

  //开始拓扑排序
  let countNum = 0
  while (queue.length > 0) {
    //出队一个，表示有一个前置课程学完了
    const course = queue.shift()!
    countNum++
    //找到course对应的所有后续课程，使他们的inDrgree减1，之后如果有入度为0的课程，直接入队
    for (const item of graph[course]) {
      inDegree[item]--
      if (inDegree[item] === 0) {
        queue.push(item)
      }
    }
  }

  return countNum === numCourses
}
