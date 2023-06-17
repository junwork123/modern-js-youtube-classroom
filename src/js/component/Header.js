import Component from '../core/Component';

export default class Header extends Component {
  initState() { return {}; }

  mounted() {
    // 컴포넌트가 마운트된 후에 동작한다.
  }

  template() {
    return `
            <h2 class="text-center font-bold">👩🏻‍💻 나만의 유튜브 강의실 👨🏻‍💻</h2>
            <nav class="d-flex justify-center">
              <button class="btn bg-cyan-100 mx-1">👁️ 볼 영상</button>
              <button class="btn mx-1">✅ 본 영상</button>
              <button id="search-button" class="btn mx-1">
                🔍 동영상 검색
              </button>
            </nav>
        `;
  }

  setEvent() {

  }
}
