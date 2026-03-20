class Node {
  constructor(value) {
    this.next = null
    this.value = value
  }
}
class LinkedList {
  constructor() {
    this.head = null
    this.size = 0
  }
  get length() {
    return this.size
  }
  append(value) {
    const newNode = new Node(value)
    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
    this.size++
  }
  traverse() {
    const values = []
    let current = this.head
    while (current) {
      values.push(current.value)
      current = current.next
    }
    console.log(values.join(' -> '))
  }
  insert(position, value) {
    if (position < 0 || position > this.size) {
      return false
    }
    const newNode = new Node(value)
    if (position === 0) {
      newNode.next = this.head
      this.head = newNode
    } else {
      let current = this.head
      for (let i = 1; i < position; i++) {
        current = current.next
      }
      newNode.next = current.next
      current.next = newNode
    }
    this.size++
    return true
  }
  removeAt(position) {
    var _a, _b, _c
    if (position < 0 || position >= this.size) {
      return null
    }
    let result = (_a = this.head) !== null && _a !== void 0 ? _a : null
    if (position === 0) {
      this.head = (_b = this.head.next) !== null && _b !== void 0 ? _b : null
    } else {
      let current = this.head
      for (let i = 1; i < position; i++) {
        current = current.next
      }
      result = current.next
      current.next = current.next.next
    }
    this.size--
    return (_c = result.value) !== null && _c !== void 0 ? _c : null
  }
  get(position) {
    if (position < 0 || position >= this.size) {
      return null
    }
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.next
    }
    return current.value
  }
  update(position, value) {
    if (position < 0 || position >= this.size) {
      return false
    }
    let current = this.head
    for (let i = 0; i < position; i++) {
      current = current.next
    }
    current.value = value
    return true
  }
  indexOf(value) {
    let current = this.head
    let index = 0
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return -1
  }
  remove(value) {
    const index = this.indexOf(value)
    if (index === -1) {
      return false
    }
    this.removeAt(index)
    return true
  }
  isEmpty() {
    return this.size === 0
  }
}
const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.traverse() // 输出: 10 -> 20 -> 30
list.insert(2, 15)
list.traverse() // 输出: 10 -> 15 -> 20 -> 30
console.log(list.removeAt(1))
list.traverse() // 输出: 10 -> 20 -> 30
list.update(1, 25)
list.traverse() // 输出: 10 -> 25 -> 30
console.log(list.indexOf(30))
