import Component from '../core/Component.js';
import { searchVideo } from '../utils/youtubeApi.js';
import { $, MODAL_SELECTOR } from '../utils/selector.js';
import {
  getRecentKeywords,
  getSearchResults,
  saveRecentKeywords,
  updateSearchResults,
} from '../store/searchModal/creator.js';
import {
  getAllArticles,
  saveArticle,
} from '../store/article/creator.js';
import {
  LIKED_STATUS,
  WATCHED_STATUS,
} from '../utils/constants.js';

const recentKeywordsTemplate = (keywords) => `
    <span class="text-gray-700">최근 검색어: </span>
    ${keywords && keywords.map((keyword) => `<span class="chip m-1">${keyword}</span>`).join('')}
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

const articleTemplate = (article, savedVideoList) => {
  const {
    id, title, channelName, date, src,
  } = article;

  const isSaved = savedVideoList.some((video) => video.id === id);

  return `
        <article class="clip js-video relative mt-5" 
            id=${id} 
            data-id=${id} 
            data-src=${src} 
            data-title=${title} 
            data-channelName=${channelName} 
            data-date=${date}>
          <div class="preview-container">
              ${previewContainer(src)}
          </div>
          <div class="content-container pt-2 px-1">
            <h3>${title}</h3>
            <div>
                <a href=${src} class="channel-name mt-1" target="_blank">
                    ${channelName}
                </a>
                <div class="meta">
                    <p>${date}</p>
                </div>
            </div>
          </div>
          <div class="d-flex justify-end">
            ${isSaved ? '<button class="btn js-save-cancel-button">🗑️ 저장 취소</button>'
    : '<button class="btn js-save-button">💾 저장</button>'}
          </div>
        </article>
  `;
};

export default class SearchModal extends Component {
  initState() {
    return {};
  }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    const savedVideoList = getAllArticles();
    const searchResults = getSearchResults();
    const recentKeywords = getRecentKeywords();
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
          </section>
          <section>
            <div class="d-flex justify-end text-gray-700">
              저장된 영상 갯수: <span id="saved-video-count">${savedVideoList.length}</span>
            </div>
            <section class="video-wrapper">
                ${searchResults && searchResults.map((article) => articleTemplate(article, savedVideoList)).join('')}
            </section>
          </section>
        </div>
       `;
  }

  setEvent() {
    this.onClickCloseButton();
    this.onClickSaveButton();
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
      updateSearchResults(searchResults);
      saveRecentKeywords(keyword);
    });
  }

  onEnterSearchInput() {
    this.addEvent('keydown', '.search-input', (event) => {
      if (event.key === 'Enter') {
        event.preventDefault(); // keydown에 의해 발생한 이벤트를 막는다.
        this.search();
      }
    });
  }

  onClickSaveButton() {
    this.addEvent('click', '.js-save-button', (event) => {
      const target = event.target.closest('.clip');
      const {
        id, title, channelName, date, src,
      } = target.dataset;
      const isWatched = WATCHED_STATUS.NOT_YET;
      const isLiked = LIKED_STATUS.NOT_YET;
      const status = { isWatched, isLiked };
      saveArticle({
        id, title, channelName, date, src, status,
      });
    });
  }
}
