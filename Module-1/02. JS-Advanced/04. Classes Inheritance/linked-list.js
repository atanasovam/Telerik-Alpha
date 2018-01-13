// class LinkedList {
//     //
// }

class ListNode {
    constructor() {
        const _list = [];
    }

    get first() {
        return this._list[0];
    }
    get last() {
        const _lastElement = this._list[this._list.length - 1];
        return _lastElement;
    }
    get length() {
        const _length = this._list.length - 1;
        return _length;
    }

    append(array) {
        return this.concat(array);
    }

    prepend(array) {
        return this.unshift(array);
    }

    insert(index, array) {
        return this.splice(index, 0, array);
    }
}

// const arr = ['5', '4', '3', '2', '5', '2'];
// const result = arr.join();
// let result = '';
// array.forEach((el) => {
//     result += el;
// });
// console.log(typeof result);
