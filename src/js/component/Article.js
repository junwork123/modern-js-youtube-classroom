import Component from '../core/Component.js';

const ArticleButtons = () => `
      <span class="opacity-hover">✅</span>
      <span class="opacity-hover">👍</span>
      <span class="opacity-hover">💬</span>
      <span class="opacity-hover">🗑️</span>
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

const contentContainer = (title, channelName, date, src) => `
    <h3>${title}</h3>
    <div>
        <a
          href=${src}
          target="_blank"
          class="channel-name mt-1"
        >
        ${channelName}
    </a>
    <div class="meta">
        <p>${date}</p>
    </div>
    <div class="button-list d-flex justify-end">
        ${ArticleButtons()}
    </div>
    </div>
    `;

export default class Article extends Component {
  initState() {
    return {};
  }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    const {
      src, title, channelName, date,
    } = this.$props;

    return `
        <div class="preview-container">
            ${previewContainer(src)}
        </div>
        <div class="content-container pt-2 px-1">
            ${contentContainer(title, channelName, date, src)}
        </div>
        `;
  }

  setEvent() {

  }
}
