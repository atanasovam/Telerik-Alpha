console.log('asfasfsf');
(() => {
    const wait = (secs) => {
        return new Promise((resolve, reject) => {
            setTimeout(resolve, secs * 1000);
        });
    };

    const blink = (state) => {
        if (state) {
            document.getElementsByTagName('h1')[0].style.display = 'none';
        } else {
            document.getElementsByTagName('h1')[0].style.display = '';
        }

        wait(0.3).then(() => blink(!state));
    };

    window.onload = () => blink(true);
})();
