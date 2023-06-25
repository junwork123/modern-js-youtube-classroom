const $ = (selector, target = document) => target.querySelector(selector);
const $$ = (selector, target = document) => target.querySelectorAll(selector);


const MODAL_SELECTOR = Object.freeze({
    SEARCH: $('#search-modal'),
});

const COMPONENT_SELECTOR = Object.freeze({
    HEADER: $('#header'),
    ARTICLE_LIST: $('#article-list'),
});

export {
    $,
    $$,
    MODAL_SELECTOR,
    COMPONENT_SELECTOR,
}