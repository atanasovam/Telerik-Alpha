const numbers = [1, 5, 4, 2, 3, 6];
const sorted = [];

numbers.forEach((number) => {
    setTimeout(() => {
        sorted.push(number);
    }, number);
});

setTimeout(() => {
    console.log(sorted);
}, Math.max(...numbers));

setTimeout(() => {
    console.log('Inside');
}, 2400);

for (let i = 0; i < 31 >> 30; i++) {
    // console.log('Outside');
}
