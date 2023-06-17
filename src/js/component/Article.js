import Component from '../core/Component';

const ArticleButtons = () => `
      <span class="opacity-hover">✅</span>
      <span class="opacity-hover">👍</span>
      <span class="opacity-hover">💬</span>
      <span class="opacity-hover">🗑️</span>
    `;
export default class Article extends Component {
  initState() { return {}; }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    return `
            <article class="clip">
                <div class="preview-container">
                  <iframe
                    width="100%"
                    height="118"
                    src="https://www.youtube.com/embed/Ngj3498Tm_0"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                  ></iframe>
                </div>
                <div class="content-container pt-2 px-1">
                  <h3>아두이노 무드등</h3>
                  <div>
                    <a
                      href="https://www.youtube.com/channel/UC-mOekGSesms0agFntnQang"
                      target="_blank"
                      class="channel-name mt-1"
                    >
                      메이커준
                    </a>
                    <div class="meta">
                      <p>2021년 3월 2일</p>
                    </div>
                    <div>
                        ${ArticleButtons()}
                    </div>
                  </div>
                </div>
          </article>
        `;
  }

  setEvent() {

  }
}
