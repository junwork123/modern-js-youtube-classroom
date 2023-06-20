import store from '../index.js';
import {
  CHANGE_FILTER
} from './actions.js';

const getFilter = () => {
    const { filter } = store.getState();
    return filter;
}

const changeFilter = (filter) => {
  store.dispatch({
    type: CHANGE_FILTER,
    payload: {
        filter,
    }
  })
}

export {
  changeFilter
};
