import ListNode from './linknode'

function detectCycle(head: ListNode | null): ListNode | null {
  let fast: ListNode | null = head
  let slow: ListNode | null = head

  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow!.next

    //第一次相遇
    if (fast === slow) {
      let ptr: ListNode | null = head
      while (ptr !== slow) {
        ptr = ptr!.next
        slow = slow!.next
      }
      return ptr
    }
  }
  return null
}
