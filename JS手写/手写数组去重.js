//普通数据类型的数组去重
//方法1：利用 map
function unique(arr) {
  const map = new Map()
  const result = []
  for (let i = 0; i < arr.length; i++) {
    if (!map.has(arr[i])) {
      map.set(arr[i], true)
      result.push(arr[i])
    }
  }
  return result
}
//方法2：利用fileter和indexOf
function unique(arr) {
  return arr.filter((item, index) => arr.indexOf(item) === index)
}
//对象数组去重
const objArr = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' },
  { id: 1, name: 'Alice 2' },
]

// 方法：利用 Map 的键唯一性
function uniqueObjArray(arr, key) {
  const map = new Map()
  return arr.filter((item) => {
    if (!map.has(item[key])) {
      map.set(item[key], 1)
      return true
    }
    return false
  })
}

console.log(uniqueObjArray(objArr, 'id'))
// [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }]
