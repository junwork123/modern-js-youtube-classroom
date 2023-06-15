import { observable } from "./observer.js";

export const createStore = (reducer) => {
    // 스토어를 생성한다.
    // 스토어는 상태를 관리하고, 상태를 변경하는 기능을 가진다.

    // reducer 가 실행될 때
    // 반환하는 객체 State 를 Observable 로 만든다.
    const initialState = reducer();
    const storedState = JSON.parse(localStorage.getItem("state"));
    const state = observable(storedState || initialState);

    const dispatch = (action) => {
        // 액션을 실행한다.
        // 액션을 실행하면 reducer 가 실행되고,
        // reducer 가 반환하는 새 객체를 state 에 할당된다.
        const newState = reducer(state, action);

        for (const [key, value] of Object.entries(newState)) {
            if(!state[key]) continue;
            state[key] = value;
        }
        // 변경된 state를 localStorage에 저장한다.
        localStorage.setItem("state", JSON.stringify(state));
    }

    // state 를 변경할 수 없도록 한 frozenState 를 만든다.
    const frozenState = {};
    Object.keys(state).forEach(key => {
        Object.defineProperty(frozenState, key, {
            get: () => state[key]
        });
    });

    // frozenState 를 반환하는 getState 함수를 만든다.
    const getState = () => frozenState;

    return { getState, dispatch };
}