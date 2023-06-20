import store from '../index.js';
import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
} from './actions.js';
import {
  FILTER_TYPE,
} from "../../utils/constants.js";

const createArticle = (article) => {
  store.dispatch({
    type: CREATE_ARTICLE,
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

const getArticlesWithFilter = () => {
    const { articles, filter } = store.getState();
    if (filter === FILTER_TYPE.ALL) { return articles; }
    return articles.filter(article => article.status === filter);
}

export {
  createArticle,
  deleteArticle,
  getArticlesWithFilter,
};
