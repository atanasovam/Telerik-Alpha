const {
    extractUrls,
} = require('../Extract-data/extract-urls');

const extractDetails = async (devicesUrls) => {
    const phonesUrl = [];
    let phonesList;

    for (let i = 0; i < devicesUrls.length; i++) {
        const phoneSelector = '.product-box .box .text h2 a';

        phonesList = await extractUrls(devicesUrls[i], phoneSelector);
        phonesUrl.push(...phonesList);
    }
    return phonesUrl;
};

module.exports = {
    extractDetails,
};
