import Component from '../core/Component.js';
import Article from './Article.js';

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
    const articles = [
      {
        src: 'https://www.youtube.com/channel/UCkbFJNY_fPwr0Ag6n69MPzw',
        title: '화살에 맞은 아기 사슴 구조한 남성...그 후 사슴의 행동',
        channelName: '이짠돌',
        date: '2023년 2월 3일',
      },
      {
        src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
        title: '포유류 - 21 말코손바닥사슴 (Moose)',
        channelName: '동물돋보기',
        date: '2022년 9월 28일',
      },
      {
        src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
        title: '포유류 - 21 말코손바닥사슴 (Moose)',
        channelName: '동물돋보기',
        date: '2022년 9월 28일',
      },
      {
        src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
        title: '포유류 - 21 말코손바닥사슴 (Moose)',
        channelName: '동물돋보기',
        date: '2022년 9월 28일',
      },
      {
        src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
        title: '포유류 - 21 말코손바닥사슴 (Moose)',
        channelName: '동물돋보기',
        date: '2022년 9월 28일',
      }, {
        src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
        title: '포유류 - 21 말코손바닥사슴 (Moose)',
        channelName: '동물돋보기',
        date: '2022년 9월 28일',
      },

    ];
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
