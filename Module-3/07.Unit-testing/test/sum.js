const {
    expect,
} = require('chai');

const {
    sum,
} = require('../sum');

it('Test if sum([1, 4, 5]) equals 10', () => {
    const actualResult = sum([1, 4, 5]);
    const expectedResult = 10;
    expect(actualResult).to.be.equal(expectedResult);
});

it('Test if sum([1, 4]) equals 10', () => {
    const actualResult = sum([1, 4]);
    const expectedResult = 5;
    expect(actualResult).to.be.equal(expectedResult);
});

it('Test if sum([1, 4, 5]) equals 10', () => {
    const actualResult = sum([1, 4, 5, 10]);
    const expectedResult = 20;
    expect(actualResult).to.be.equal(expectedResult);
});
