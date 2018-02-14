let fs = require('fs');

let walkPath = './';

/* eslint-disable */

const walk = (dir, done) => {
    fs.readdir(dir, (error, list) => {
        if (error) {
            return done(error);
        }

        let i = 0;
        (function next() {
            let file = list[i++];

            if (!file) {
                return done(null);
            }

            file = dir + '/' + file;

            fs.stat(file, (err, stat) => {
                if (stat && stat.isDirectory()) {
                    walk(file, (err) => {
                        next();
                    });
                } else {
                    console.log(file.match(/.txt$/g)[1]);

                    next();
                }
            });
        })();
    });
};

// optional command line params
//      source for walk path
process.argv.forEach((val, index, array) => {
    if (val.indexOf('source') !== -1) {
        walkPath = val.split('=')[1];
    }
});

console.log('-------------------------------------------------------------');
console.log('processing...');
console.log('-------------------------------------------------------------');

walk(walkPath, (error) => {
    if (error) {
        throw error;
    } else {
        console.log('-------------------------------------------------------------');
        console.log('finished.');
        console.log('-------------------------------------------------------------');
    }
});
