import { combineReducers } from 'redux'

import todos from './todos'
import filtered from './filtered'

export default combineReducers({
  todos, filtered
})