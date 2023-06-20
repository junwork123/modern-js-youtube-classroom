import Component from '../core/Component.js';
import Article from './Article.js';
import {
  getArticlesWithFilter,
} from "../store/article/creator.js";

function articleTemplate() {
  const id = Date.now().toString(36) + Math.random().toString(36).substr(2);
  const item = document.createElement('article');
  item.classList.add('clip');
  item.classList.add('js-video');
  item.classList.add('relative');
  item.classList.add('mt-5');
  item.setAttribute('id', id);
  return item;
}

export default class ArticleList extends Component {
  initState() { return {}; }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    const articles = getArticlesWithFilter();
    articles.forEach((article) => {
      const item = articleTemplate();
      this.$target.appendChild(item);
      new Article(item, article);
    });

    return this.$target.innerHTML;
  }

  setEvent() {

  }
}
