"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.log('It works here');
var Person = /** @class */ (function () {
    function Person(name) {
        this.firstName = name;
    }
    return Person;
}());
exports.Person = Person;
console.log('adsfafsf');
var p1 = new Person('Pesho');
console.log(p1.firstName);
