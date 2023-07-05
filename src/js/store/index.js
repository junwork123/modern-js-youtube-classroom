import reducer from './reducer.js';
import modalReducer from './modalReducer.js';
import createStore from '../core/createStore.js';

const store = createStore(reducer, 'state');
const modalStore = createStore(modalReducer, 'modalState');

export {
  store,
  modalStore,
};
