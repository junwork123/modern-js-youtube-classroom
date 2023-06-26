import Component from '../core/Component.js';
import { searchVideo } from '../utils/youtubeApi.js';
import {
  $,
  MODAL_SELECTOR,
} from '../utils/selector.js';

const recentKeywordsTemplate = (keywords) => `
    <span class="text-gray-700">최근 검색어: </span>
    ${keywords.map((keyword) => `<span class="chip m-1">${keyword}</span>`).join('')}
  `;

const savedVideoCountTemplate = (count) => `
        <div class="d-flex justify-end text-gray-700">
                  저장된 영상 갯수: <span id="saved-video-count">${count}</span>
        </div>
    `;

const previewContainer = (src) => `
    <iframe
        width="100%"
        height="118"
        src=${src}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
    ></iframe>
    `;

const articleTemplate = (article) => {
  const {
    id, title, channelName, date, src,
  } = article;

  return `
        <article class="clip js-video relative mt-5" id=${id}>
          <div class="preview-container">
              ${previewContainer(src)}
          </div>
          <div class="content-container pt-2 px-1">
  
          <h3>${title}</h3>
            <div>
                <a href=${src}
                    target="_blank"
                    class="channel-name mt-1">
                    ${channelName}
                </a>
                <div class="meta">
                    <p>${date}</p>
                </div>
            </div>
          </div>
        </article>
  `;
};

export default class SearchModal extends Component {
  initState() {
    return {
      recentKeywords: [],
      searchResults: [],
    };
  }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    // const { recentKeywords } = this.state;
    const { searchResults } = this.$state;
    const recentKeywords = ['노마드코더', '프론트엔드', '백엔드', '풀스택', '자바스크립트'];
    const savedVideoCount = 10;
    return `
        <div class="modal-inner p-8">
          <button class="modal-close">
            <svg viewbox="0 0 40 40">
              <path class="close-x" d="M 10,10 L 30,30 M 30,10 L 10,30" />
            </svg>
          </button>
          <header>
            <h2 class="text-center">🔎 유튜브 검색</h2>
          </header>
          <form class="d-flex">
            <input type="text" class="w-100 mr-2 pl-2 search-input" placeholder="검색" />
            <button type="button" class="btn bg-cyan-500 search-button">검색</button>
          </form>
          <section class="mt-2">
            ${recentKeywordsTemplate(recentKeywords)}
            ${savedVideoCountTemplate(savedVideoCount)}
          </section>
          <section class="video-wrapper">
            ${searchResults && searchResults.map((article) => articleTemplate(article)).join('')}
          </section>
        </div>
       `;
  }

  setEvent() {
    this.onClickCloseButton();
    this.onClickSearchButton();
    this.onEnterSearchInput();
  }

  onClickCloseButton() {
    this.addEvent('click', '.modal-close', () => {
      MODAL_SELECTOR.SEARCH.classList.remove('open');
    });
  }

  onClickSearchButton() {
    this.addEvent('click', '.search-button', () => {
      this.search();
    });
  }

  search() {
    const keyword = $('.search-input').value;
    searchVideo(keyword).then((data) => {
      const searchResults = data.items.map((item) => ({
        id: item.id.videoId,
        title: item.snippet.title,
        channelName: item.snippet.channelTitle,
        date: item.snippet.publishedAt,
        src: `https://www.youtube.com/embed/${item.id.videoId}`,
      }));
      this.setState({ searchResults });
    });
  }

  setState(param) {
    this.$state = { ...this.$state, ...param };
    this.render();
  }
}
