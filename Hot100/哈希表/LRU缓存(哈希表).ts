class LRUCache {
  // 1. 定义数据结构
  capacity: number
  cache: Map<number, number>

  constructor(capacity: number) {
    this.capacity = capacity
    this.cache = new Map() // Map 会保持插入顺序
  }

  // --- 逻辑实现：get ---
  get(key: number): number {
    // 1. 如果没找到，直接返回 -1
    if (!this.cache.has(key)) {
      return -1
    }

    // 2. 如果找到了，它变成了“最近使用”的
    // 思路：先删，再重加，它就跑到 Map 的末尾去了
    const value = this.cache.get(key)!
    this.cache.delete(key)
    this.cache.set(key, value)

    return value
  }

  // --- 逻辑实现：put ---
  put(key: number, value: number): void {
    // 1. 如果 key 已经存在
    if (this.cache.has(key)) {
      // 我们要覆盖它，所以先删掉旧的（也是为了把新值排到末尾）
      this.cache.delete(key)
    }

    // 2. 放入新值（此时它会在 Map 的最末尾）
    this.cache.set(key, value)

    // 3. 检查是否超重
    if (this.cache.size > this.capacity) {
      // 谁是“最久未使用”的？就是 Map 里的第一个
      // keys() 返回迭代器，next() 拿第一个，value 拿到值
      const oldKey = this.cache.keys().next().value!
      this.cache.delete(oldKey) // 踢出局
    }
  }
}
