const LinkedList = require('./linked-list');

class Stack {
    constructor() {
        this._linkedList = new LinkedList();
    }

    push(value) {
        this._linkedList.prepend(value);
        return this;
    }

    pop() {
        return this._linkedList.length ? this._linkedList.removeAt(0) : null;
    }

    get length() {
        return this._linkedList.length;
    }
}

module.exports = Stack;
