import {
  FILTER_TYPE,
  LIKED_STATUS,
  WATCHED_STATUS,
} from '../utils/constants.js';
import {
  CHANGE_FILTER,
} from './filter/actions.js';
import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_LIKED_STATUS,
  UPDATE_WATCHED_STATUS,
} from './article/actions.js';

const initialState = {
  articles: [
    {
      id: '1',
      src: 'https://www.youtube.com/channel/UCkbFJNY_fPwr0Ag6n69MPzw',
      title: '화살에 맞은 아기 사슴 구조한 남성...그 후 사슴의 행동',
      channelName: '이짠돌',
      date: '2023년 2월 3일',
      status: {
        isWatched: WATCHED_STATUS.NOT_YET,
        isLiked: LIKED_STATUS.NOT_YET,
      },
    },
    {
      id: '2',
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: {
        isWatched: WATCHED_STATUS.NOT_YET,
        isLiked: LIKED_STATUS.NOT_YET,
      },
    },
    {
      id: '3',
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: {
        isWatched: WATCHED_STATUS.NOT_YET,
        isLiked: LIKED_STATUS.NOT_YET,
      },
    },
    {
      id: '4',
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: {
        isWatched: WATCHED_STATUS.NOT_YET,
        isLiked: LIKED_STATUS.NOT_YET,
      },
    },
    {
      id: '5',
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: {
        isWatched: WATCHED_STATUS.NOT_YET,
        isLiked: LIKED_STATUS.NOT_YET,
      },
    }, {
      id: '6',
      src: 'https://www.youtube.com/channel/UClExf-ScXuEUvskktEOz0dA',
      title: '포유류 - 21 말코손바닥사슴 (Moose)',
      channelName: '동물돋보기',
      date: '2022년 9월 28일',
      status: {
        isWatched: WATCHED_STATUS.NOT_YET,
        isLiked: LIKED_STATUS.NOT_YET,
      },
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
    case UPDATE_WATCHED_STATUS:
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.id === action.payload.id) {
            return {
              ...article,
              status: {
                ...article.status,
                isWatched: action.payload.isWatched,
              },
            };
          }
          return article;
        }),
      };
    case UPDATE_LIKED_STATUS:
      return {
        ...state,
        articles: state.articles.map((article) => {
          if (article.id === action.payload.id) {
            return {
              ...article,
              status: {
                ...article.status,
                isLiked: action.payload.isLiked,
              },
            };
          }
          return article;
        }),
      };
    case CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload.filter,
      };
    default:
      return state;
  }
};

export default reducer;
