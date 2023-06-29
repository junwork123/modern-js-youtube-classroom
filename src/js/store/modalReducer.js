import {
  GET_RECENT_KEYWORDS,
  SAVE_RECENT_KEYWORDS, UPDATE_SEARCH_RESULTS,
} from './searchModal/actions.js';

const initialState = {
  currentKeyword: '',
  recentKeywords: [],
  searchResults: [],
};

const modalReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_RECENT_KEYWORDS:
      return {
        ...state,
      };
    case SAVE_RECENT_KEYWORDS:
      return {
        ...state,
        // 5개까지만 저장되도록 함
        recentKeywords: [action.payload.keyword, ...state.recentKeywords.slice(0, 4)],
      };
    case UPDATE_SEARCH_RESULTS:
      return {
        ...state,
        searchResults: action.payload.searchResults,
      };
    default:
      return state;
  }
};

export default modalReducer;
