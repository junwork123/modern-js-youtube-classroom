import {FILTER_TYPE} from '../utils/constants.js';
import {
  CHANGE_FILTER,
} from "./filter/actions.js";
import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
} from "./article/actions.js";

const initialState = {
  articles: [
    {
      src: 'https://www.youtube.com/channel/UCkbFJNY_fPwr0Ag6n69MPzw',
      title: '화살에 맞은 아기 사슴 구조한 남성...그 후 사슴의 행동',
      channelName: '이짠돌',
      date: '2023년 2월 3일',
      status: FILTER_TYPE.ACTIVE,
    },
    {
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: FILTER_TYPE.ACTIVE,
    },
    {
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: FILTER_TYPE.ACTIVE,
    },
    {
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: FILTER_TYPE.ACTIVE,
    },
    {
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: FILTER_TYPE.ACTIVE,
    }, {
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: FILTER_TYPE.ACTIVE,
    },
  ],
  filter: FILTER_TYPE.ALL,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case CREATE_ARTICLE:
      return {
        ...state,
        articles: [...state.articles, action.payload.article],
      };
    case DELETE_ARTICLE:
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== action.payload.id),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      }
    default:
      return state;
  }
};

export default reducer;
