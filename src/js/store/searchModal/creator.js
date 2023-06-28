import {
  SAVE_RECENT_KEYWORDS,
  UPDATE_SEARCH_RESULTS,
} from './actions.js';
import { modalStore } from '../index.js';

const getRecentKeywords = () => {
  const { recentKeywords } = modalStore.getState();
  return recentKeywords;
};

const saveRecentKeywords = (keyword) => {
  modalStore.dispatch({
    type: SAVE_RECENT_KEYWORDS,
    payload: {
      keyword,
    },
  });
};

const getSearchResults = () => {
  const { searchResults } = modalStore.getState();
  return searchResults;
};

const updateSearchResults = (searchResults) => {
  modalStore.dispatch({
    type: UPDATE_SEARCH_RESULTS,
    payload: {
      searchResults,
    },
  });
};

export {
  getRecentKeywords,
  saveRecentKeywords,
  updateSearchResults,
  getSearchResults,
};
