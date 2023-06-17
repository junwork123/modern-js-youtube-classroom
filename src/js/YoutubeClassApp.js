import { $ } from './utils/selector';
import {
  Header,
  ArticleList,
  SearchModal,
} from './component/index';

export default class YoutubeClassApp {
  constructor($target) {
    this.$target = $target;
    new Header($('#header'));
    new ArticleList($('#article-list'));
    new SearchModal($('#search-modal'));
  }
}
