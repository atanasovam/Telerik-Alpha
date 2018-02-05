const tests = require('./../../Telerik-Alpha/gest-print');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const primeTriangle = (() => {
    const filterNumbers = (n) => {
        let result = [1];

        for (let i = 1; i <= n; i += 1) {
            if (isPrime(i)) {
                result.push(i);
            }
        }
        return result;
    };

    const isPrime = (num) => {
        let n = Math.sqrt(num);

        for (let i = 2; i <= n; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        if (n === 0 || n === 1) {
            return false;
        }
        return true;
    };

    let n = +gets();
    let primeNumbers = filterNumbers(n);
    let lastPrimeNumber = primeNumbers[primeNumbers.length - 1];


    let arr = Array.from({ length: primeNumbers.length }, (x) => []);
    arr[0] = (['1']);

    let currArr = '';
    let length = primeNumbers.length - 1;

    for (let i = length; i >= 1; i -= 1) {
        for (let j = 1; j <= lastPrimeNumber; j += 1) {
            if (isPrime(j) || j == 1) {
                currArr += '1';
            } else {
                currArr += '0';
            }
        }

        arr[i].push(currArr);
        primeNumbers.pop();
        lastPrimeNumber = primeNumbers[primeNumbers.length - 1];
        currArr = '';
    }

    print(arr.join('\n'));
})();
