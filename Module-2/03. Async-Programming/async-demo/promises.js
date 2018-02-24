const wait = (seconds) => {
    return new Promise((resolve) => {
        setTimeout(resolve, seconds * 1000);
    });
};

wait(2)
    .then(() => {
        console.log(2);
    })
    .catch((err) => {
        /* All errors come here */
    });

console.log(3);
