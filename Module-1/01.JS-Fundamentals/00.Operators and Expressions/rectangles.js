const rectangle = (args) => {
    const [h, w] = [Number(args[0]), Number(args[1])];
    const area = (h * w);
    const perim = 2 * (h + w);
    const result = area.toFixed(2) + ' ' + perim.toFixed(2);

   return result;
};
rectangle(['3.8273446234', '2.5']);
rectangle(['5', '5']);
rectangle(['3', '4']);
