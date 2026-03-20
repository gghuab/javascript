export default class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}

function swapPairs(head: ListNode | null): ListNode | null {
  let dummy = new ListNode(0)
  dummy.next = head

  let current = dummy

  while (current.next && current.next.next) {
    let node1 = current.next
    let node2 = current.next.next

    current.next = node2
    node1.next = node2.next
    node2.next = node1

    current = node1
  }
  return dummy.next
}
export {}
