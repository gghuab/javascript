class Scheduler {
  queue = []
  size = 0
  constructor(max) {
    this.max = max
    // this.queue = []
    // this.size = 0
  }
  async add(fn) {
    if (this.size >= this.max) {
      await new Promise((resolve, reject) => {
        this.queue.push(resolve)
      })
    }

    this.size++

    try {
      let res = await fn()
      return res
    } finally {
      this.size--
      if (this.queue.length) {
        this.queue.shift()()
      }
    }
  }
}

// 延迟函数
const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time))

// 同时进行的任务最多2个
const scheduler = new Scheduler(2)

// 添加异步任务
// time: 任务执行的时间
// val: 参数
const addTask = (time, val) => {
  scheduler.add(() => {
    return sleep(time).then(() => console.log(val))
  })
}

addTask(1000, '1')
addTask(500, '2')
addTask(300, '3')
addTask(400, '4')
// 2
// 3
// 1
// 4
/**
 * 限制并发的批量请求函数
 * @param {Array<Function>} tasks - 返回 Promise 的异步任务函数数组
 * @param {Number} maxNum - 最大并发数
 * @returns {Promise} - 返回一个最终的 Promise，按原数组顺序包含所有结果
 */
async function concurrentRequests(tasks, maxNum) {
  let result = []
  let inProgress = []
  let index = 0
  async function workers() {
    while (index < tasks.length) {
      let curIndex = index
      index++
      try {
        let res = await tasks[curIndex]()
        result[curIndex] = res
      } catch (err) {
        result[curIndex] = err
      }
    }
  }

  for (let i = 0; i < maxNum; i++) {
    inProgress.push(workers())
  }
  await Promise.all(inProgress)

  return result
}

function schedule(n) {
  return async function batchfetch(tasks) {
    let result = []
    let inProgress = []
    let index = 0
    async function workers() {
      while (index < tasks.length) {
        let curIndex = index
        index++
        try {
          let res = await tasks[curIndex]()
          result[curIndex] = res
        } catch (err) {
          result[curIndex] = err
        }
      }
    }

    for (let i = 0; i < n; i++) {
      inProgress.push(workers())
    }
    await Promise.all(inProgress)

    return result
  }
}

//图片懒加载
function loadImageAsync(url) {
  return new Promise((resolve, reject) => {
    let image = new Image()
    image.onload = function () {
      resolve(image)
    }
    image.onerror = function () {
      reject(new Error(`image:${url} error`))
    }
    image.src = url
  })
}
//红绿灯

export {}
