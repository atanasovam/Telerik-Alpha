const getThirdBit = (args) => {
    const str = Number(args[0]);
    const mask = 1 << 3;
    const nAndMask = str & mask;
    const result = nAndMask >> 3;
    console.log(result);
};
getThirdBit(['15']);
getThirdBit(['1024']);
