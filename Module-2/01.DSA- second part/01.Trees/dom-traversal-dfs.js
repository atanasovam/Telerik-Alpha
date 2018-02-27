const withoutGenerators = (() => {
    const traverseDom = (node) => {
        // console.log(node.nodeName);
        const result = [node];

        for (const child of node.childNodes) {
            result.push(...traverseDom(child));
        }

        return result;
    };

    const rootNode = document.getElementsByTagName('body');
    const allNodes = traverseDom(rootNode);
})();

const withGenerators = (() => {
    const traverseDom = function* (node) {
        yield node;
        for (const child of node.childNodes) {
            yield* traverseDom(child);
        }
    };

    const rootNode = document.getElementsByTagName('html');
    let count = 0;
    for (const node of traverseDom(rootNode)) {
        console.log(node);
        count++;

        if (node.innerHTML === 'Learn more') {
            break;
        }
    }
})();

const iterative = (() => {
    const traverseDom = function* (node) {
        const stack = [];
        stack.push(node);

        while (stack.length > 0) {
            const top = stack.pop();
            yield top;
            for (const child of node.childNodes) {
                stack.push(child);
            }
        }
    };

    const rootNode = document.getElementsByTagName('html');
    let count = 0;

    for (const node of traverseDom(rootNode)) {
        console.log(node);
        count++;

        if (node.innerHTML === 'Learn more') {
            break;
        }
    }
})();
