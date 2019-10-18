import { createStore } from 'redux'
import todos from './reducers/todos/reducer'
import t from './reducers/reducer'

const store = createStore(todos);

export default store