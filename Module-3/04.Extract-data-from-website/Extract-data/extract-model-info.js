const {
    JSDOM,
} = require('jsdom');

const $init = require('jquery');

const extractDetails = async (devicesUrls) => {
    const modelsUrls = [];
    // devicesUrls = [...devicesUrls];
    for (let i = 0; i < devicesUrls.length; i++) {
        const dom = await JSDOM.fromURL(devicesUrls[i]);

        const $ = $init(dom.window);

        const modelsLinks = [...$('figure a')];
        const models = modelsLinks
            .map((link) => $(link))
            .map(($link) => 'http://www.technopolis.bg/' + $link.attr('href'));
        console.log(models);
        modelsUrls.push(models);
    }
    return modelsUrls;
};
// extractDetails();
module.exports = {
    extractDetails,
};
