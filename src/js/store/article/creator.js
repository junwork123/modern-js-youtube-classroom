import {
  CREATE_ARTICLE,
  DELETE_ARTICLE,
} from './actions.js';
import store from '../index.js';

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

export {
  createArticle,
  deleteArticle,
};
