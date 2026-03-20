import Node from './链表'
function reverseLinkedList(head: Node<number> | null): Node<number> | null {
  let newHead: Node<number> | null = null
  let current = head
  while (head) {
    current = head.next
    head.next = newHead
    newHead = head
    head = current
  }
  return newHead
}
