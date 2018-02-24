const wait = (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, seconds * 1000);
    });
};
const run = (async () => {
    for (let i = 0; i < 5; i++) {
        await wait(i);
        console.log(i);
    }
})();
