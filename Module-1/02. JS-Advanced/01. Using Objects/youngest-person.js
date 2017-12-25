const tests = require('./../../../gest-print.js');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const youngestPerson = () => {
    const makeObj = (firstName, lastName, age) => {
        return {
            firstname: firstName,
            lastname: lastName,
            age: +age,
        };
    };

    const args = gets();
    let currObj;
    let result;
    let currAge;
    let currYoungest = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < args.length; i += 3) {
        currObj = makeObj(args[i], args[i + 1], args[i + 2]);
        currAge = currObj.age;

        if (currYoungest > currAge) {
            currYoungest = currAge;
            result = currObj.firstname + ' ' + currObj.lastname;
        }
    }

    print(result);
};
youngestPerson();
