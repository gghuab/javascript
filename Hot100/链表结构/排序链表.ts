class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function sortList(head: ListNode | null): ListNode | null {
  if (head === null || head.next === null) return head //递归结束的条件

  let fast: ListNode | null = head.next //先让fast移动到head的下一个，这样在进行快慢指针移动的时候，可以让慢指针移动到前半部分的最后一个节点，而非后半部分的头结点
  let slow: ListNode | null = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow!.next
  }

  //此时slow为前半部分的最后一个节点
  let newHead: ListNode | null = slow!.next //后半部分的首节点
  //然后断开
  slow!.next = null

  //递归分割左右部分
  let p1: ListNode | null = sortList(head)
  let p2: ListNode | null = sortList(newHead)

  //来到这里的时候说明只有一个节点或者为空了，开始合并

  let dummy: ListNode | null = new ListNode(0) //创建虚拟头结点
  let current: ListNode | null = dummy
  while (p1 !== null && p2 !== null) {
    if (p1.val < p2.val) {
      current.next = p1
      p1 = p1.next
      current = current.next
    } else {
      current.next = p2
      p2 = p2.next
      current = current.next
    }
  }
  //判断p1 p2 那个还剩元素，直接连上
  if (p1 !== null) {
    current.next = p1
  }
  if (p2 !== null) {
    current.next = p2
  }

  return dummy.next //返回头结点
}
