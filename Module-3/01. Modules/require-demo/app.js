const { sum, multipy } = require('./multiply');

const calculate = (args) => args.reduce(...args, sum);

calculate([1, 43, 2]);
