class Stack {
    constructor() {
        this._arr = [];
    }

    push(val) {
        this._arr.push(val);
    }

    pop() {
        return this._arr.pop();
    }
}
module.exports = Stack;
