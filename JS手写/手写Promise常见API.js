Promise.myall = function (promises) {
  return new Promise((resolve, reject) => {
    //判断输入参数是否是可迭代对象，不是则返回一个失败的promise对象
    if (!Array.isArray(promises)) {
      return reject(new TypeError('arguments must be an array'))
    }
    if (promises.length === 0) return resolve([]) //传入空数组，返回空数组的promise对象
    let result = [] //所有都成功时，返回值为成功的数组的promise对象
    let count = 0
    promises.forEach((p, index) => {
      //resolve函数传入的如果promise对象，会直接返回这个promise，传普通值才会返回成功的promise，这样可以给p是一个基本数据类型的时候做包装
      Promise.resolve(p).then(
        (val) => {
          result[index] = val //正确的位置插入正确的值
          count++
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

Promise.myrace = function (promises) {
  return new Promise((resolve, reject) => {
    //给所有promise去做then的回调，当有promise对象的状态改变时，会自动调用then回调，改变我们返回的这个promise的状态
    for (const p of promises) {
      Promise.resolve(p).then(
        (val) => {
          resolve(val)
        },
        (err) => {
          reject(err)
        },
      )
    }
  })
}

Promise.myallSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Arguments must be an array'))
    }
    if (promises.length === 0) return resolve([])
    let count = 0
    let result = []
    promises.forEach((p, index) => {
      Promise.resolve(p).then(
        (val) => {
          result[index] = { status: 'fulfilled', value: val }
          count++
          if (count === promises.length) resolve(result)
        },
        (err) => {
          result[index] = { status: 'rejected', reason: err }
          count++
          if (count === promises.length) resolve(result)
        },
      )
    })
  })
}

Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError('Arguments must be an array'))
    }
    const errors = []
    let count = 0

    if (promises.length === 0) {
      // 如果传入为空，直接抛出 AggregateError
      return reject(new AggregateError([], 'All promises were rejected'))
    }

    promises.forEach((p, index) => {
      Promise.resolve(p).then(
        (val) => {
          resolve(val) // 只要有一个成功，立即返回
        },
        (err) => {
          errors[index] = err // 记录失败原因
          count++
          if (count === promises.length) {
            // 所有都失败了
            reject(new AggregateError(errors, 'All promises were rejected'))
          }
        },
      )
    })
  })
}
