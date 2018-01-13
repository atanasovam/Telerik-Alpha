const PrintMixin = {
    print() {
        console.log(this + ' test');
    },
};

const Fly = {
    fly() {
        console.log(this + ' is flying');
    },
};

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    print() {
        console.log(this + ' ' + this.name + ', ' + this.age);
    }
}
const pesho = new Person('Pesho', 25);
pesho.print();
Object.assign(pesho, Fly, PrintMixin);
pesho.fly();
console.log(pesho);
pesho.print();
