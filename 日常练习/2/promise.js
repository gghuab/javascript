Promise.myall = function (promises) {
  let result = []
  let count = 0
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (val) => {
          result[index] = val
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
