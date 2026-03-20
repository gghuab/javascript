class ListNode {
  val: number
  next: ListNode | null
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val
    this.next = next === undefined ? null : next
  }
}
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  if (headA === null || headB === null) {
    return null
  }
  const visited = new Set()
  while (headA !== null) {
    visited.add(headA)
    headA = headA.next
  }
  while (headB !== null) {
    if (visited.has(headB)) {
      return headB
    }
    headB = headB.next
  }
  return null
}
