/* globals Map */
/* globals Set */
const tests = require('./../../gest-print');
const returnedObj = tests();
const gets = returnedObj.gets;
const print = returnedObj.print;

const sortResources = () => {
    const n = +gets();
    const inputТokens = Array.from(
        { length: n },
        (x) => gets().split(' needs ')
    );
    // Map
    const makeGraph = (() => {
        const tokensMap = new Map();

        for (const line of inputТokens) {
            if (!tokensMap.has(line[0])) {
                tokensMap.set(line[0], [line[1]]);
            } else {
                tokensMap.get(line[0]).push(line[1]);
            }
        }
        return tokensMap;
    })();
    // Set
    const getSingleNodes = () => {
        const start = new Set();
        const rightPart = [];
        const leftPart = [];

        for (const token of makeGraph) {
            leftPart.push(token[0]);
            rightPart.push(...token[1]);
        }

        for (let key of makeGraph) {
            const value = key[1];
            key = key[0];

            if (rightPart.indexOf(key) === -1) {
                start.add(key);
            }
            for (const val of value) {
                if (leftPart.indexOf(val) === -1) {
                    start.add(val);
                }
            }
        }
        return start;
    };

    let nodes = new Set([...getSingleNodes()].sort());

    const visited = {};
    const dfs = (node) => {
        visited[node] = true;
        for (const neighbor in makeGraph) {
            if (visited[makeGraph]) {
                continue;
            }
            dfs(neighbor);
        }
    };
};
sortResources();
