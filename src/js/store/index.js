import reducer from './reducer';
import { createStore } from '../../../../modern-js-todo-list/src/js/core/createStore';

const store = createStore(reducer);

export default store;
