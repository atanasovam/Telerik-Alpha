class Mammal {
    constructor(age, legs) {
        this.age = age;
        this.legs = legs;
    }
    speak(speach) {
        console.log(speach);
    }
}

class Person extends Mammal {
    constructor(name, age, legs) {
        super(age, legs);
        this.name = name;
    }
    speak(speach) {
        super.speak(speach);
        console.log(`${this.name} says '${speach}'!`);
    }
}

const pesho = new Person('Pesho', 19, 2);
console.log(pesho);
