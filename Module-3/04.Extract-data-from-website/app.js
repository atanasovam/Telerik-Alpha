const {
    extractUrls,
} = require('./Extract-data/extract-pages-urls');

const {
    extractDetails,
} = require('./Extract-data/extract-model-info');

const mainUrl = 'http://www.technopolis.bg/bg//%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D0%BD%D0%B8-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B8-%D0%B8-%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%B8/%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D0%BD%D0%B8-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B8/c/P11040101?layout=List&sort=price-asc&pricerange=&pageselect=48&q=%3Aprice-asc';

const run = (async () => {
    const selectedPages = await extractUrls(mainUrl);
    console.log(selectedPages);
    const models = await extractDetails(selectedPages);
    console.log(models);
    models.forEach((model) => console.log(model));
})();
