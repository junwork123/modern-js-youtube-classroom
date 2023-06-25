import {
  Header,
  ArticleList,
  SearchModal,
} from './component/index.js';
import {
  COMPONENT_SELECTOR,
  MODAL_SELECTOR
} from './utils/selector.js';

export default class YoutubeClassApp {
  constructor($target) {
    this.$target = $target;
    new Header(COMPONENT_SELECTOR.HEADER);
    new ArticleList(COMPONENT_SELECTOR.ARTICLE_LIST);
    new SearchModal(MODAL_SELECTOR.SEARCH);
  }
}
