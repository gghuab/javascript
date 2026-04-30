function array2Tree(arr) {
  let map = {}
  let result = []
  for (const item of arr) {
    map[item.id] = { ...item, children: [] }
    //先把数组映射到对象里去，添加children属性，是一个空数组
  }
  for (const item of arr) {
    if (item.pid === 0) {
      result.push(map[item.id])
    } else {
      // map[pid].children.push(item)
      // 前面没写item.pid，后面push的是源对象而不是映射后的
      map[item.pid].children.push(map[item.id])
    }
  }
  return result
}
