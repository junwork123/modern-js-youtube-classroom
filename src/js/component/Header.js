import Component from '../core/Component.js';
import {FILTER_TYPE} from "../utils/constants.js";
import {changeFilter} from "../store/filter/creator.js";
import {$$} from "../utils/selector.js";

const changeButtonAsPressed = (target) => {
    const buttons = $$('.article-filter');
    buttons.forEach(button => {
        button.classList.remove('active');
        button.classList.remove('bg-cyan-100');
    });
    target.classList.add('active');
    target.classList.add('bg-cyan-100');
}

export default class Header extends Component {
  initState() { return {}; }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    return `
            <h2 class="text-center font-bold">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h2>
            <nav class="d-flex justify-center">
              <button class="btn mx-1 article-filter" data-filter="${FILTER_TYPE.ALL}">👁️ 전체 영상</button>
              <button class="btn mx-1 article-filter" data-filter="${FILTER_TYPE.ACTIVE}">📎 볼 영상</button>
              <button class="btn mx-1 article-filter" data-filter="${FILTER_TYPE.COMPLETED}">✅ 본 영상</button>
              <button class="btn mx-1 article-filter" data-filter="${FILTER_TYPE.LIKED}">👍🏻 좋아요 한 영상</button>
              <button class="btn mx-1" id="search-button">🔍 동영상 검색</button>
            </nav>
        `;
  }

  setEvent() {
    this.onClickSearchButton();
    this.onChangeFilter();
  }

  onChangeFilter() {
    this.addEvent('click', '.article-filter', (event) => {
      const target = event.target;
      const filter = target.dataset.filter;
      changeFilter(filter);
      changeButtonAsPressed(event.target);
    });
  }

  onClickSearchButton() {
    this.addEvent('click', '#search-button', () => {
    });
  }
}
