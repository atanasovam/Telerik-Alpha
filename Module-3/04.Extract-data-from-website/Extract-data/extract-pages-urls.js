/* globals Set */

const {
    JSDOM,
} = require('jsdom');

const $init = require('jquery');

const extractUrls = async (url) => {
    const dom = await JSDOM.fromURL(url);
    const $ = $init(dom.window);

    const pageLinks = [...$('.paging a')];
    const pages = pageLinks
        .map((link) => $(link))
        .map(($link) => 'http://www.technopolis.bg/' + $link.attr('href'));

    return [...new Set(pages)];
};

module.exports = {
    extractUrls,
};
