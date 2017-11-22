function solve(args) {
    let [h, w] = [Number(args[0]), Number(args[1])];
    let area = (h * w);
    let perim = 2 * (h + w);
    let result = area.toFixed(2) + ' ' + perim.toFixed(2);

    console.log(result);
}
solve(['3.8273446234', '2.5']);
solve(['5', '5']);
solve(['3', '4']);