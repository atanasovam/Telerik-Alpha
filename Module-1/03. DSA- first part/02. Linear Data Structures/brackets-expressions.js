const tests = require('./../../../gest-print.js');
const Stack = require('./stack-with-array');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const extractExpressions = () => {
    const expr = gets().split('');
    const stack = new Stack;
    const validExpr = [];

    expr.forEach((element, index) => {
        if (element === '(') {
            stack.push(index);
        } else if (element === ')') {
            validExpr.push(expr.slice(stack.pop(), index + 1));
        }
    });

    validExpr.forEach((line) => print(line.join('')));
};
// extractExpressions();
/* eslint-disable*/
const extractExpressionsRecursive = () => {
    const findExpr = (index) => {
        if (index >= expr.length) {
            return 0;
        }

        if (expr[index] === '(') {
            const result = findExpr(index + 1);
            if (result !== 0) {
                print(expr.substring(index, result + 1));
            }
            return findExpr(result + 1);
        }

        if (expr[index] === ')') {
            return index;
        }
        return findExpr(index + 1);
    };

    const expr = gets();

    findExpr(0);
};
extractExpressionsRecursive();
