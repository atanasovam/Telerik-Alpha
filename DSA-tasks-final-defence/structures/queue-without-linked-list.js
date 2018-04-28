class Queue {
    constructor() {
        this.count = 0;
        this.items = [];
    }

    enqueue(...values) {
        this.count++;
        this.items.push(values);
    }
    dequeue() {
        return this.items.pop();
    }

    isEmpty() {
        return this.count === 0;
    }
}

module.exports = Queue;
