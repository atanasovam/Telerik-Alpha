class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this._length = 0;
    }

    get length() {
        return this._length;
    }

    get first() {
        return this.head;
    }

    get last() {
        return this.tail;
    }

    append(...values) {
        values.forEach((val) => {
            const newNode = new Node(val);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.prev = this.tail;
                this.tail.next = newNode;
                this.tail = newNode;
            }
        });
        this._length += values.length;
        return this;
    }

    prepend(...values) {
        values.forEach((val) => {
            const newNode = new Node(val);
            if (this.head === null) {
                this.head = newNode;
                this.tail = newNode;
            } else {
                newNode.next = this.head;
                this.head.prev = newNode;
                this.head = newNode;
            }
        });
        this._length += values.length;
        return this;
    }

    insert(index, ...values) {
        if (index < 0 || index > this._length) {
            throw new Error('Invalid index');
        }

        if (index === 0) {
            return this.prepend(...values);
        }

        if (index === this._length) {
            return this.append(...values);
        }
        let current = this.head;
        for (let i = 0; i < index - 1; i += 1) {
            current = current.next;
        }

        values.forEach((val) => {
            const newNode = new Node(val);
            newNode.next = current.next;
            newNode.prev = current.next.prev;
            current.next.prev = newNode;
            current.next = newNode;
            current = current.next;
        });
        this._length += values.length;
        return this;
    }
}

module.exports = {
    DoublyLinkedList,
    Node,
};
