class Schedule {
  constructor(max) {
    this.queue = [] //被阻塞待执行的异步任务
    this.count = 0 //当前在执行的个数
    this.max = max //最大并行个数
  }

  async addTask(fn) {
    // 1. 需要加上 async
    if (this.count >= this.max) {
      await new Promise((resolve) => {
        this.queue.push(resolve)
      })
      //如果当前正在执行的个数大于等于了最大数，
      //那么调用await 阻塞在此处，后续某个任务执行完了，再去调用queue里的resolve解除阻塞
    }

    this.count++

    try {
      const res = await fn()
      //这里的return会被js调度然后等finally执行后再return
      return res // 2. 需要把当前函数的执行结果返回出去
    } finally {
      // 3. 必须放在 finally 里面！否则一旦 fn() 报错，下面两句永远不会执行，导致彻底死锁！
      this.count--

      if (this.queue.length) {
        this.queue.shift()() //执行一个resolve
      }
    }
  }
}
//暂存结果：先把 res 的值偷偷保存到内存的一个临时变量里。
//挂起返回：拦截并“暂停”此时的 return 动作，函数并没有立刻结束。
//强制跳转：立刻跳转到 finally 块里，去执行 this.count-- 和 this.queue.shift()()。
//真正返回：等 finally 的代码全部执行完毕后，再把刚刚暂存的 res 真正地返回给外部，函数正式结束。

async function concurrentRequests(tasks, maxNum) {
  const result = [] // 存结果
  let index = 0 // 叫号机：代表目前排队轮到第几个任务了

  // 👷‍♂️ 定义一个“打工人”（银行窗口）的工作流程
  async function worker() {
    // 只要队伍里还有任务，就一直循环接客
    while (index < tasks.length) {
      // 1. 抢占当前任务号，并立刻把叫号机 +1，留给下一个窗口
      const currentIndex = index
      index++

      // 2. 开始耐心处理当前任务（干活...）
      try {
        result[currentIndex] = await tasks[currentIndex]()
      } catch (err) {
        result[currentIndex] = err
      }
      // 干完后，while 循环会自动进入下一轮，继续抢下一个号
    }
  }

  // 🏢 银行开门营业：根据最大并发数，雇佣几个打工人同时开始干活
  const workers = []
  for (let i = 0; i < maxNum; i++) {
    workers.push(worker()) // 窗口全开！
  }

  // 🕒 坐等所有打工人全部把手头的活干完，银行就能关门下班了
  await Promise.all(workers)

  // 把整理好的结果交差
  return result
}

async function concurrentRequests(tasks, maxNum) {
  let index = 0 //下一个要执行的任务的索引值
  let result = []
  let inProgress = []
  async function worker() {
    // let currentIndex = index
    // index++ //注意这里不要写到外面
    while (index < tasks.length) {
      let currentIndex = index
      index++
      try {
        result[currentIndex] = await tasks[currentIndex]()
      } catch (err) {
        result[currentIndex] = err
      }
    }
  }

  for (let i = 0; i < maxNum; i++) {
    inProgress.push(worker())
    //woker里面的await没执行完的时候，返回的是一个pendding的promise
  }
  await Promise.all(inProgress) //所有任务执行完之后才解除阻塞
  return Promise.resolve(result) //返回一个promise 值是所有结果
}
