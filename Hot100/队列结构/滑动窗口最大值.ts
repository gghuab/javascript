function maxSlidingWindow(nums: number[], k: number): number[] {
  let res: number[] = []
  let dequeue: number[] = []
  for (let i = 0; i < nums.length; i++) {
    //如果队列里有索引，并且目前遍历到的值要比队列里的最后一个值大，那么从尾部弹出
    while (dequeue.length && nums[i] > nums[dequeue[dequeue.length - 1]]) {
      dequeue.pop()
    }
    //当队列为空了，或者是已经不再比队列里的值大了，则push该值
    dequeue.push(i)
    //此时要检查队列开头的元素，也就是最大值，有没有越界
    if (dequeue[0] <= i - k) {
      //如果越界则从头部弹出这个越界的最大值
      dequeue.shift()
    }
    //判断此时最大值的索引是否符合要求，如果K是三则至少要扫描到索引为2的元素，才开始算滑动窗口的最大值
    if (i >= k - 1) {
      const max = dequeue[0]
      res.push(nums[max])
    }
  }

  return res
}
