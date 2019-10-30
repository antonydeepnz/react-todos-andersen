import { createStore } from 'redux'
import reducer from './reducers/reducer'
import * as LS from '../src/localStorageFuncs'

const store = createStore(reducer);

store.subscribe(() => {
  LS.saveState({
    todos: store.getState().todos,
  });
});

export default store;