import Heap from '../堆结构/最大堆结构.js';
class PriorityQueue {
    constructor() {
        this.queue = new Heap();
    }
    enqueue(value) {
        this.queue.insert(value);
    }
    dequeue() {
        return this.queue.extract();
    }
    size() {
        return this.queue.size();
    }
    peek() {
        return this.queue.peek();
    }
    isEmpty() {
        return this.queue.isEmpty();
    }
}
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
    valueOf() {
        return this.score;
    }
}
const p2 = new Student('xiaoming', 90);
const p1 = new Student('lihua', 99);
const p3 = new Student('lihua', 22);
const queue = new PriorityQueue();
queue.enqueue(p1);
queue.enqueue(p2);
queue.enqueue(p3);
console.log(queue);
