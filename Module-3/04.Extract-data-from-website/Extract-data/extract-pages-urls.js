/* globals Set */

const {
    JSDOM,
} = require('jsdom');

const $init = require('jquery');

const extractUrls = async (url) => {
    const dom = await JSDOM.fromURL(url);
    const $ = $init(dom.window);

    const pageLinksSelector = '.paging a';
    const pages = Array.from($(pageLinksSelector));
    return pages.map((link) => link.href);
};

module.exports = {
    extractUrls,
};
