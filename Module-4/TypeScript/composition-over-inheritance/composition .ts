class Bark {
    constructor() { }

    public bark(): void {
        console.log('Berk');
    }
}

class Drive {
    constructor() { }

    public drive(): void {
        console.log('drive');
    }
}

class Kill {
    constructor() { }

    public kill(): void {
        console.log('kill');
    }
}

class KillerRobotDog {
    constructor(
        private _kill: Kill,
        private _drive: Drive,
        private _bark: Bark
    ) { }

    public kill(): void {
        this._kill.kill();
    }

    public drive(): void {
        this._drive.drive();
    }

    public bark(): void {
        this._bark.bark();
    }
}

class KillerRobot {
    constructor(
        private _kill: Kill,
        private _drive: Drive,
    ) { }

    public kill(): void {
        this._kill.kill();
    }

    public drive(): void {
        this._drive.drive();
    }
}

/**
 * Nai- qkoto neshto ever, zaklevam se! 
 */