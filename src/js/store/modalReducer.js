import {
  GET_RECENT_KEYWORDS,
  SAVE_RECENT_KEYWORDS, UPDATE_SEARCH_RESULTS,
} from './searchModal/actions.js';

const initialState = {
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
        recentKeywords: [...state.recentKeywords, action.payload.keyword],
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
