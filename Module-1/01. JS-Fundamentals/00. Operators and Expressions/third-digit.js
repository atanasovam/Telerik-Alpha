const getThirdDigit = (args) => {
    const str = args[0];
    const thirdN = str[str.length - 3];

    if (thirdN === 7) {
        return true;
    }
    if (str.length < 3) {
        return `false 0`;
    }
    return `false ${thirdN}`;
};
getThirdDigit(['9703']);
getThirdDigit(['701']);
getThirdDigit(['50']);
getThirdDigit(['877']);
getThirdDigit(['777877']);
getThirdDigit(['9999799']);
