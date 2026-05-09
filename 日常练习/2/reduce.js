function myreduce(callback, inital) {
  if (this.length === 0 && !inital) throw Error('参数错误')

  let arr = this

  let hasInital = arguments.length >= 2

  let startIndex = hasInital ? 0 : 1

  let acc = hasInital ? inital : arr[0]

  for (let i = startIndex; i < arr.length; i++) {
    acc = callback(acc, arr[i], i, arr)
  }
  return acc
}
