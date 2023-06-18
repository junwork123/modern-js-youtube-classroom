import { FILTER_TYPE } from '../utils/constants';

const initialState = {
  articles: [],
  filter: FILTER_TYPE.ALL,
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'CREATE_ARTICLE':
      return {
        ...state,
        articles: [...state.articles, action.payload.article],
      };
    case 'DELETE_ARTICLE':
      return {
        ...state,
        articles: state.articles.filter((article) => article.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default reducer;
