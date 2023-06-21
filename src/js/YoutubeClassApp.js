import { $ } from './utils/selector.js';
import {
  Header,
  ArticleList,
  SearchModal,
} from './component/index.js';

export default class YoutubeClassApp {
  constructor($target) {
    this.$target = $target;
    new Header($('#header'));
    new ArticleList($('#article-list'));
    new SearchModal($('#search-modal'));
  }
}
