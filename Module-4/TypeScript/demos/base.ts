import { IRepresent } from "./base.interface";

abstract class Person implements IRepresent {
    static _representationsCount: number = 0;
    private _firstName: string;
    private _lastName: string;
    static _id: number = 0;;

    constructor(firstName: string, lastName: string) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    get name(): string {
        return this._firstName + ' ' + this._lastName;
    }

    get represent(): void {
        Person._representationsCount++;
        return this.representPerson(this._firstName, this._lastName);
    }

    public representPerson(f, s): void {
        console.log(`Hi, I'm ` + f + ` ` + s);
    }


    incremetID(): void {
        Person._id++;
    }
}

// const p: Person = new Person('Pesho', 'Nqkoisi');
// p.represent;

// console.log(p.name);

class Student extends Person {
    static _studentID: number = 0;

    constructor(private firstName: string, private lastName: string) {
        super(firstName, lastName);
        Student._studentID++;
        Student._id++;
    }

    get represent(): void {
        Person._representationsCount++;
        return this.representPerson(this.firstName, this.lastName);
    }

    incremetID(): void {
        Student._id++;
    }
}

const s: Student = new Student('Nqkoi', 'Nqkoisi');

console.log(Student.name);
console.log(Person._id);
