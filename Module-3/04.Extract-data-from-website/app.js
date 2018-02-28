/* globals Set */
const {
    extractPagesUrls,
} = require('./extract-data/extract-pages-urls');

const {
    extractDetails,
} = require('./extract-data/extract-phone-info');

const mainUrl = 'http://www.technopolis.bg/bg//%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D0%BD%D0%B8-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B8-%D0%B8-%D0%A2%D0%B0%D0%B1%D0%BB%D0%B5%D1%82%D0%B8/%D0%9C%D0%BE%D0%B1%D0%B8%D0%BB%D0%BD%D0%B8-%D1%82%D0%B5%D0%BB%D0%B5%D1%84%D0%BE%D0%BD%D0%B8/c/P11040101?pageselect=1000&page=200&q=:price-asc&text=&layout=List&sort=price-asc';


(async () => {
    const [, , ...selectedPages] = await extractPagesUrls(mainUrl);
    console.log(selectedPages);
    let phonesUrl = await extractDetails(selectedPages);
    phonesUrl = new Set(phonesUrl);
    [...phonesUrl].forEach((phone) => console.log(phone));
})();
