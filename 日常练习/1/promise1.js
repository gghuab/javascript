Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    // 1. 边界情况：如果是空数组，直接返回成功状态的空数组
    if (promises.length === 0) return resolve([])

    let result = []
    let count = 0 // 2. 必须使用独立的计数器

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (val) => {
          result[index] = val
          count++ // 每成功一个，计数加一

          // 3. 不能用 result.length，因为通过 index 给数组赋值，会撑大 length，导致提前 resolve
          if (count === promises.length) {
            resolve(result)
          }
        },
        (err) => {
          reject(err)
        },
      )
    })
  })
}
// function isPromise(obj) {
//   return (
//     typeof obj !== null && // 1. 确保不是 null 或 undefined
//     (typeof obj === 'object' || typeof obj === 'function') && // 2. 确保是对象或函数
//     typeof obj.then === 'function' // 3. 确保身上存在 `.then` 且它是个函数
//   )
// }

// // 测试：
// const p1 = new Promise((resolve) => resolve());
// const p2 = { then: function(resolve) { resolve('hello') } }; // Thenable 对象
Promise.myrace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        (val) => {
          resolve(val)
        },
        (res) => {
          reject(res)
        },
      )
    })
  })
}

Promise.myany = function (promises) {
  return new Promise((resolve, reject) => {
    // 边界处理：如果传入空数组，根据规范会报错 AggregateError
    if (promises.length === 0) return reject(new AggregateError([], 'All promises were rejected'))

    let result = []
    let count = 0
    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        (val) => {
          resolve(val)
        },
        (res) => {
          result[index] = res
          count++
          if (count === promises.length) {
            // 修正拼写：promises.length
            // 规范：全部失败时需要抛出 AggregateError
            reject(new AggregateError(result, 'All promises were rejected'))
          }
        },
      )
    })
  })
}

Promise.myallSettled = function (promises) {
  return new Promise((resolve, reject) => {
    // 边界处理：空数组直接返回空结果
    if (promises.length === 0) return resolve([])

    let result = []
    let count = 0
    
    promises.forEach((item, index) => {
      Promise.resolve(item).then(
        (val) => {
          result[index] = { status: 'fulfilled', value: val }
          count++
          if (count === promises.length) {
            // 修正拼写：promises.length
            resolve(result) // 修正拼写：resolve
          }
        },
        (res) => {
          result[index] = { status: 'rejected', reason: res } // 规范：失败的对象应该用 reason
          count++
          if (count === promises.length) {
            // 修正拼写：promises.length
            resolve(result) // 修正拼写：resolve
          }
        },
      )
    })
  })
}
