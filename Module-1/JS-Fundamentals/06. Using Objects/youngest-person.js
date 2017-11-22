function solve(args) {
    let people = [], currObj, result, currAge, currYoungest = Number.MAX_SAFE_INTEGER;

    for (let i = 0; i < args.length; i += 3) {
        currObj = makeObj(args[i], args[i + 1], args[i + 2]);
        currAge = currObj.age;

        if (currYoungest > currAge) {
            currYoungest = currAge;
            result = currObj.firstname + ' ' + currObj.lastname;
        }
    }

    console.log(result);

    function makeObj(firstName, lastName, age) {
        return {
            firstname: firstName,
            lastname: lastName,
            age: +age
        }
    }
}
solve([
    'Gosho', 'Petrov', '32',
    'Bay', 'Ivan', '81',
    'John', 'Doe', '42'
]);
solve([
    'Penka', 'Hristova', '61',
    'System', 'Failiure', '88',
    'Bat', 'Man', '16',
    'Malko', 'Kote', '72'
]);