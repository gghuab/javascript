import ArrayQueue from '../队列结构/数组实现.js';
class Deque extends ArrayQueue {
    enqueueFront(value) {
        this.data.unshift(value);
    }
    dequeueRear() {
        return this.data.pop();
    }
}
