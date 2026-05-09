function reverseKlist(head, k) {
  if (!head || k <= 1) return head

  // 1. 获取链表总长度
  let length = 0
  let curr = head
  while (curr) {
    length++
    curr = curr.next
  }

  let dummy = new ListNode(0)
  dummy.next = head

  // 2. 计算头部有多少个节点不需要反转，并跳过对应节点
  let skipCount = length % k
  let pre = dummy
  for (let i = 0; i < skipCount; i++) {
    pre = pre.next
  }

  // 3. 剩下的部分正好是 k 的整数倍，执行标准的 k 个一组反转
  let end = pre
  while (true) {
    for (let i = 0; i < k; i++) {
      if (end) end = end.next
    }

    if (!end) break

    let start = pre.next
    let next = end.next
    end.next = null

    let newStart = reverseList(start)

    pre.next = newStart
    start.next = next

    pre = start
    end = start
  }

  return dummy.next

  function reverseList(head) {
    let newHead = null
    while (head) {
      let temp = head.next
      head.next = newHead
      newHead = head
      head = temp
    }
    return newHead
  }
}
