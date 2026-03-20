import ListNode from './linknode'

function hasCycle(head: ListNode | null): boolean {
  //定义快慢指针
  let fast: ListNode | null = head
  let slow: ListNode | null = head

  //循环判断
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow!.next
    if (fast === slow) {
      return true
    }
  }

  return false
}
