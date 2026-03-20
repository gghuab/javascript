class ArrayQueue {
    constructor() {
        this.data = [];
    }
    enqueue(item) {
        this.data.push(item);
    }
    dequeue() {
        return this.data.shift();
    }
    peek() {
        return this.data[0];
    }
    isEmpty() {
        return this.data.length === 0;
    }
    size() {
        return this.data.length;
    }
}
export default ArrayQueue;
