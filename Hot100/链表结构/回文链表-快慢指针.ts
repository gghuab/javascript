import ListNode from './两两交换链表的节点'
function isPalindrome(head: ListNode | null): boolean {
  //翻转链表函数
  const reverseList = function (node: ListNode | null): ListNode | null {
    let newhead: ListNode | null = null
    while (node) {
      const temp = node.next
      node.next = newhead
      newhead = node
      node = temp
    }
    return newhead
  }

  if (!head) {
    return true
  }

  let fast: ListNode | null = head
  let slow: ListNode | null = head
  //定义快慢指针
  while (fast !== null && fast.next != null) {
    fast = fast.next.next
    slow = slow!.next
  }
  //出循环时，slow正好指到中间，奇数是中间，偶数是中间的后一个

  let newhead: ListNode | null = reverseList(slow)
  //从中间开始反转

  let p1 = head
  let p2 = newhead
  let result = true
  //开始比较，p2长度要小于等于p1，所以以p2为空为终止条件即可
  while (p2) {
    if (p1.val !== p2.val) {
      result = false
      break
    }
    p1 = p1.next!
    p2 = p2.next
  }

  //结束之后恢复原始链表结构
  reverseList(newhead)
  return result
}
