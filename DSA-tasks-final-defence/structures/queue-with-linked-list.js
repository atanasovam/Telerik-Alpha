import { LinkedList } from './linked-list';

export class Queue {
    constructor() {
        this._linkedList = new LinkedList();
    }

    enqueue(value) {
        this._linkedList.append(value);
        return this;
    }

    dequeue() {
        return this._linkedList.length ? this._linkedList.removeAt(0) : null;
    }

    get length() {
        return this._linkedList.length;
    }
}
