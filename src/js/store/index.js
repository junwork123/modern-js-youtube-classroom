import reducer from "./reducer.js";
import {createStore} from "../../../../modern-js-todo-list/src/js/core/createStore.js";
const store = createStore(reducer);

export { store };