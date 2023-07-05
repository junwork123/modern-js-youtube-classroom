import { store } from '../index.js';
import {
  SAVE_ARTICLE,
  DELETE_ARTICLE,
  UPDATE_LIKED_STATUS,
  UPDATE_WATCHED_STATUS,
} from './actions.js';
import {
  FILTER_TYPE, LIKED_STATUS, WATCHED_STATUS,
} from '../../utils/constants.js';

const saveArticle = (article) => {
  store.dispatch({
    type: SAVE_ARTICLE,
    payload: {
      article,
    },
  });
};

const deleteArticle = (id) => {
  store.dispatch({
    type: DELETE_ARTICLE,
    payload: {
      id,
    },
  });
};

const updateWatchedStatus = (id, isWatched) => {
  store.dispatch({
    type: UPDATE_WATCHED_STATUS,
    payload: {
      id,
      isWatched,
    },
  });
};

const updateLikedStatus = (id, isLiked) => {
  store.dispatch({
    type: UPDATE_LIKED_STATUS,
    payload: {
      id,
      isLiked,
    },
  });
};

const getAllArticles = () => {
  const { articles } = store.getState();
  return articles;
};

const getArticlesWithFilter = () => {
  const { articles, filter } = store.getState();
  if (filter === FILTER_TYPE.ALL) { return articles; }
  return articles.filter((article) => {
    if (filter === FILTER_TYPE.ACTIVE) {
      return article.status.isWatched === WATCHED_STATUS.NOT_YET;
    }
    if (filter === FILTER_TYPE.WATCHED) {
      return article.status.isWatched === WATCHED_STATUS.WATCHED;
    }
    if (filter === FILTER_TYPE.LIKED) {
      return article.status.isLiked === LIKED_STATUS.LIKED;
    }
    return article;
  });
};

export {
  saveArticle,
  deleteArticle,
  updateWatchedStatus,
  updateLikedStatus,
  getArticlesWithFilter,
  getAllArticles,
};
