import { combineReducers } from 'redux'

import todos from './todos'
import another from './another'

export default combineReducers({
  todos, another
})