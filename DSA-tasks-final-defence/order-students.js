const DoublyLinkedList = require('./structures/doubly-linked-list');
const tests = require('../gest-print');
const returnedObj = tests();
const [gets, print] = [returnedObj.gets, returnedObj.print];

const [, k] = gets().split(' ').map((x) => +x);

const studentsList = new DoublyLinkedList();
studentsList.append(...gets().split(' '));

const students = {};

let student = studentsList.head;
while (student !== null) {
    students[student.value] = student;
    student = student.next;
}

for (let i = 0; i < k; i++) {
    const [left, right] = gets().split(' ');

    if (left === right) {
        continue;
    }

    const leftNode = students[left];
    const rightNode = students[right];

    if (leftNode.next === rightNode) {
        continue;
    }

    const leftNodeNext = leftNode.next;
    const leftNodePrevious = leftNode.prev;
    const rightNodePrevious = rightNode.prev;

    // Fix the relations -> left
    if (leftNodePrevious !== null) {
        leftNodePrevious.next = leftNodeNext;

        if (leftNodeNext !== null) {
            leftNodeNext.prev = leftNodePrevious;
        }
    } else {
        studentsList.head = leftNode.next;
    }

    if (leftNodeNext !== null) {
        leftNodeNext.prev = leftNodePrevious;

        if (leftNodePrevious !== null) {
            leftNodePrevious.next = leftNodeNext;
        }
    }

    // Fix the relations -> right
    if (rightNodePrevious !== null) {
        rightNodePrevious.next = leftNode;
        leftNode.prev = rightNodePrevious;

        leftNode.next = rightNode;
        rightNode.prev = leftNode;
    } else {
        studentsList.head = leftNode;
        leftNode.prev = null;
        leftNode.next = rightNode;
        rightNode.prev = leftNode;
    }
}
const result = [];
let n = studentsList.head;

while (n !== null) {
    result.push(n.value);
    n = n.next;
}

print(result.join(' '));
