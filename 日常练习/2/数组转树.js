function array2Tree(arr) {
  let map = {}
  for (let i = 0; i < arr.length; i++) {
    map[arr[i].id] = { ...arr[i], children: [] }
  }
  let result = []
  // 错误1：普通对象不能直接用 for...of 遍历，应该遍历 Object.values(map) 或者原数组
  for (const item of Object.values(map)) {
    // 错误2：应该是判断当前项 item 的 pid，而不是 map.pid
    if (item.pid === 0) {
      result.push(item)
    } else {
      // 容错处理：确保在 map 中能找到对应的父节点
      if (map[item.pid]) {
        map[item.pid].children.push(item)
      }
    }
  }
  // 错误3：千万别忘了返回结果
  return result
}
