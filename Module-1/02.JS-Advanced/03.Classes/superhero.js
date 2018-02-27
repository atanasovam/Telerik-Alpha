
class Superhero {
    constructor(name, powers) {
        this.name = name;
        this.powers = powers;
    }

    superpower() {
        console.log(`I,m ${this.name} and I can do -> ${this.powers}`);
    }
    get powersString() {
        return this.powers.join(', ');
    }
    set powersString(powersString) {
        this.powers = powersString.split(', ');
    }
}
Superhero.prototype.printLogo = (logo) => {
    console.log(logo);
};
Superhero.prototype.age = (token) => {
    const age = token;
    return age;
};

(() => {
    const batman = new Superhero('Batman', ['shit', 'second shit']);

    console.log(batman.name);
    batman.name = 'Jake';
    console.log(batman.name);

    batman.printLogo('B');
    batman.superpower();
})();

(() => {
    const superman = new Superhero('Superman', ['sddc', 'edkdjuu']);
    console.log(superman.name);

    superman.printLogo('S');
    superman.superpower();

    console.log(superman.powers);
    console.log(superman.powersString);

    superman.powersString = 'DA qde';

    console.log(superman.powersString);
    console.log(superman.age(7));
})();
