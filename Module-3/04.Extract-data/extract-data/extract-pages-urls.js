const {
    extractUrls,
} = require('../extract-data/extract-urls');

const extractPagesUrls = async (url) => {
    const pageLinksSelector = '.paging a';

    const pagesList = await extractUrls(url, pageLinksSelector);
    return pagesList;
};

module.exports = {
    extractPagesUrls,
};
