const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const nextPermutation = (array) => {
    // Find non-increasing suffix
    let i = array.length - 1;
    while (i > 0 && array[i - 1] >= array[i]) {
        i--;
    }
    if (i <= 0) {
        return false;
    }

    // Find successor to pivot
    let j = array.length - 1;
    while (array[j] <= array[i - 1]) {
        j--;
    }
    let temp = array[i - 1];
    array[i - 1] = array[j];
    array[j] = temp;

    // Reverse suffix
    j = array.length - 1;
    while (i < j) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
        i++;
        j--;
    }
    return true;
};

const [n, perm] = [+gets(), gets().split(' ').map(Number)];
nextPermutation(perm);

print(perm.join(' '));
// quit(0);
