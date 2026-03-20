import Heap from '../堆结构/最大堆结构.js';
class PriorityNode {
    constructor(priority, value) {
        this.priority = priority;
        this.value = value;
    }
    valueOf() {
        return this.priority;
    }
}
class PriorityQueue {
    constructor() {
        this.queue = new Heap();
    }
    enqueue(value, priority) {
        const node = new PriorityNode(priority, value);
        this.queue.insert(node);
    }
    dequeue() {
        return this.queue.extract()?.value;
    }
    size() {
        return this.queue.size();
    }
    peek() {
        return this.queue.peek()?.value;
    }
    isEmpty() {
        return this.queue.isEmpty();
    }
}
