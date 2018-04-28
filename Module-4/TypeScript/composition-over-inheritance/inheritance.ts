class Animal {
    constructor() { }

    public poop(): void {
        console.log('pooping');
    }
}

class Dog extends Animal {
    constructor() {
        super();
    }

    public bark(): void {
        console.log('bark');
    }
}

class Cat extends Animal {
    constructor() {
        super();
    }

    public meow(): void {
        console.log('meow');
    }
}

class Robot {
    constructor() { }
    public drive(): void {
        console.log('driving');
    }
}

class CleaningRobot extends Robot {
    constructor() {
        super();
    }

    public clean(): void {
        console.log('cleaning');
    }
}


class KillingRobot extends Robot {
    constructor() {
        super();
    }

    public kill(): void {
        console.log('killing');
    }
}


/**
 * Now we need class with the methods below:
 * bark()
 * drive()
 * kill()
 */

class KillingRobotDog extends KillingRobot {
    constructor() {
        super();
    }

    public bark(): void {
        console.log('bark');
    }
}


/**
 * Now we have .drive() and .kill()
 * but what about bark() ??
 * We need to copy-paste it or 
 * to extend class with functionality useless for us.
 */
