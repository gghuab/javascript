import ListNode from './两两交换链表的节点'
function isPalindrome(head: ListNode | null): boolean {
  if (!head) {
    return false
  }
  let values: number[] = []
  let temp: ListNode | null = head
  while (temp) {
    values.push(temp.val)
    temp = temp.next
  }
  for (let i = 0, j = values.length - 1; i < j; i++, j--) {
    if (values[i] !== values[j]) {
      return false
    }
  }
  return true
}
