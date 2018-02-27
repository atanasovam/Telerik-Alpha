const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const num = +gets();

// 1
for (let i = 0; i < num; i += 1) {
    print(i * 5);
}

// 2
const allocated = (number) => {
    const result = [];
    result.length = number;

    for (let i = 0; i < result.length; i += 1) {
        result[i] = i * 5;
    }

    return result;
};

allocated(+gets()).forEach((x) => print(x));
