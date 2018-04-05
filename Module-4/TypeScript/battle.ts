// import { gets, print } from './gets.print';

class Battle {
    static _counter: number;
    static _value: number;
    static _p1: number = 0;
    static _p2: number = 0;
    static _currentRow: number = 0;
    static _currentCol: number = 0;

    _result: string;
    _row: number;
    _col: number;

    constructor(row, col) {
        this._row = row;
        this._col = col;
    }

    public print(player1, player2?): void {
        console.log(player1 + `:${player2}`);
    }

    get counter() {
        return Battle._counter;
    }

    get boat1() {
        const boat: Array<number> =
            Array.from(
                { length: this._row },
                (x) => gets()
                    .split(' ')
                    .map((x) => Number(x)));

        return boat;
    }

    get boat2() {
        const boat: Array<number> =
            Array.from(
                { length: this._row },
                (x) => gets()
                    .split(' ')
                    .map((x) => Number(x))
            );

        return boat;
    }

    public moveFirstPlayer(command): void {
        Battle._currentRow = +command[1];
        Battle._currentCol = +command[2];

        const customRow: number = this._row - 1 - Battle._currentRow;
        const customCol: number = this._col - 1 - Battle._currentCol;

        const value: number = this.boat2[customRow][customCol];

        this._result = this.currentOutput(value);

        this.print(this._result);

        if (this._result === 'Booom') {
            Battle._p1 += 1;
        }

        this.boat2[customRow][customCol] = 'X';

        Battle._counter++;
    }

    public moveSecondPlayer(command): void {
        Battle._currentRow = +command[1];
        Battle._currentCol = +command[2];

        const value: number = this.boat1[Battle._currentRow][Battle._currentCol];
        this._result = this.currentOutput(value);

        print(this._result);

        if (this._result === 'Booom') {
            Battle._p2 += 1;
        }

        this.boat1[Battle._currentRow][Battle._currentCol] = 'X';

        Battle._counter++;
    }

    public calculateResult(matrix): number {
        let count = 0;

        matrix.forEach((line) => {
            line.forEach((element) => {
                if (element == '1') {
                    count++;
                }
            });
        });

        return count;
    }

    public currentOutput(value): string {
        switch (value) {
            case '1': return 'Booom';
            case '0': return 'Missed';
            case 'X': return 'You already shot there!';
            default: break;
        }
    }
}

const gets: Array<string> = (function (): Array<string> {
    return [
        '9 10',
        '0 98 3 520 367 394 452 8 460 65',
        '282 42 162 110 316 451 20 21 529 156',
        '472 265 513 516 120 444 428 299 82 218',
        '161 221 528 257 373 34 4 202 329 433',
        '83 253 558 483 499 60 374 424 43 475',
        '460 450 3 387 68 173 324 299 547 93',
        '531 66 119 31 171 63 103 169 274 154',
        '355 505 93 187 120 128 136 335 177 334',
        '345 16 246 466 373 120 259 298 389 260'
    ];
})();

let i: number = 0;
const size: Array<number> = gets[i].split(' ').map(Number);

const battle: Battle = new Battle(size[0], size[1]);
let command: Array<string>;

while (true) {
    command = gets[i].split(' ');

    if (command[0] === 'END') {
        battle.print(battle.calculateResult(battle.boat1), battle.calculateResult(battle.boat2));
        break;
    }

    if (battle.counter % 2 === 0) {
        battle.moveFirstPlayer(command);
    } else {
        battle.moveSecondPlayer(command);
    }
}
