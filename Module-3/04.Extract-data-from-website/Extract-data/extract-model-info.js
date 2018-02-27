const {
    JSDOM,
} = require('jsdom');

const $init = require('jquery');

const extractDetails = async (devicesUrls) => {
    const modelsUrls = [];
    for (let i = 0; i < devicesUrls.length; i++) {
        const dom = await JSDOM.fromURL(devicesUrls[i]);
        const $ = $init(dom.window);

        const phoneA = Array.from($('.product-box .box .text h2 a'));
        const modelsLinks = phoneA.map((link) => link.href);
        modelsUrls.push(...modelsLinks);
    }
    return modelsUrls;
};

module.exports = {
    extractDetails,
};
