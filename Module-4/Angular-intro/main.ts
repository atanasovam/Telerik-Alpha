console.log('It works here')

export class Person {
    firstName: string;

    constructor(name: string) {
        this.firstName = name;
    }
}

console.log('adsfafsf');
const p1 = new Person('Pesho');
console.log(p1.firstName);
