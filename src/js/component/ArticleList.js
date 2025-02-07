import Component from '../core/Component.js';
import {
  deleteArticle,
  getArticlesWithFilter,
  updateLikedStatus,
  updateWatchedStatus,
} from '../store/article/creator.js';
import {
  LIKED_STATUS, WATCHED_STATUS,
} from '../utils/constants.js';

const statusButtons = (status) => {
  const { isWatched, isLiked } = status;

  return `
      <span class="${isWatched === WATCHED_STATUS.NOT_YET ? 'opacity-hover' : ''} complete-button" data-watched="${isWatched}">✅</span>
      <span class="${isLiked === LIKED_STATUS.NOT_YET ? 'opacity-hover' : ''} like-button" data-liked="${isLiked}">👍</span>
      <span class="opacity-hover delete-button">🗑️</span>
    `;
};
const getClosestArticleId = (target) => target.closest('.clip').id;
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
    id, title, channelName, date, src, status,
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
                <div class="button-list d-flex justify-end">
                    ${statusButtons(status)}
                </div>
            </div>
          </div>
        </article>
  `;
};

export default class ArticleList extends Component {
  template() {
    const articles = getArticlesWithFilter();

    return `
          ${articles && articles.map((article) => articleTemplate(article)).join('')}
        `;
  }

  setEvent() {
    this.clickCompleteButton();
    this.clickLikeButton();
    this.clickDeleteButton();
  }

  clickCompleteButton() {
    this.addEvent('click', '.complete-button', (event) => {
      const { target } = event;
      const id = getClosestArticleId(target);
      if (target.dataset.watched === WATCHED_STATUS.NOT_YET) {
        updateWatchedStatus(id, WATCHED_STATUS.WATCHED);
        target.classList.remove('opacity-hover');
      } else {
        updateWatchedStatus(id, WATCHED_STATUS.NOT_YET);
        target.classList.add('opacity-hover');
      }
      this.render();
    });
  }

  clickLikeButton() {
    this.addEvent('click', '.like-button', (event) => {
      const { target } = event;
      const id = getClosestArticleId(target);
      if (target.dataset.liked === LIKED_STATUS.NOT_YET) {
        updateLikedStatus(id, LIKED_STATUS.LIKED);
        target.classList.remove('opacity-hover');
      } else {
        updateLikedStatus(id, LIKED_STATUS.NOT_YET);
        target.classList.add('opacity-hover');
      }
      this.render();
    });
  }

  clickDeleteButton() {
    this.addEvent('click', '.delete-button', (event) => {
      const { target } = event;
      const id = getClosestArticleId(target);
      if (window.confirm('정말 삭제하시겠습니까?')) { deleteArticle(id); }
    });
  }
}
