class Person {
    constructor(name, age) {
        this.name = name.split(' ').join(' ');
        this.age = age;
    }
    introduce(str) {
        return console.log(`Hi, i'm ${this.name}!`);
    }
}

const john = new Person('John Nqkoisi', 21);
john.introduce();
const kate = new Person('Kate Nekjkz', 29);
kate.introduce();
