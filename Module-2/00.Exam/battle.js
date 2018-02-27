const tests = require('./../../gest-print');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const battle = () => {
    const calculateResult = (matrix) => {
        let count = 0;
        matrix.forEach((line) => {
            line.forEach((element) => {
                if (element === '1') {
                    count += 1;
                }
            });
        });
        return count;
    };
    const getOutput = (v) => {
        switch (v) {
            case '1': return 'Booom';
            case '0': return 'Missed';
            case 'X': return 'You already shot there!';
            default: break;
        }
    };
    const boatSize = gets().split(' ').map(Number); // row|col

    const boat1 = Array.from({ length: boatSize[0] }, (x) => gets().split(' '));
    const boat2 = Array.from({ length: boatSize[0] }, (x) => gets().split(' '));

    let command;
    let row; let col;
    let counter = 0; let value;
    let p1 = 0; let p2 = 0;
    let result;

    while (true) {
        command = gets().split(' ');
        if (command[0] === 'END') {
            print(calculateResult(boat1) + ':' + calculateResult(boat2));
            return;
        }
        row = +command[1];
        col = +command[2];

        /* eslint-disable */
        if (counter % 2 === 0) {
            value = boat2[boatSize[0] - 1 - row][boatSize[1] - 1 - col];
            result = getOutput(value);
            print(result);
            if (result === 'Booom') { p1 += 1; }
            boat2[boatSize[0] - 1 - row][boatSize[1] - 1 - col] = 'X';
        } else {
            value = boat1[row][col];
            result = getOutput(value);
            print(result);
            if (result === 'Booom') { p2 += 1; }
            boat1[row][col] = 'X';
        }

        counter += 1;
    }
};
battle();
