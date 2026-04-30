function array2Tree(arr) {
  let arrayMap = {}
  let result = []

  for (const item of arr) {
    arrayMap[item.id] = { ...item, children: [] }
  }

  for (const item of arr) {
    let id = item.id
    let pid = item.pid
    let treeItem = arrayMap[id]

    if (treeItem.pid === 0) {
      result.push(treeItem) //如果是根节点那么直接push
    } else {
      if (arrayMap[pid]) {
        arrayMap[pid].children.push(treeItem)
      }
    }
  }
  return result
}
