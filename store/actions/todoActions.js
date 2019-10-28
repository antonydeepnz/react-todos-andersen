export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
})

export const deleteTodo = (key) => ({
  type: 'DELETE_TODO',
  key
})

export const setChecked = (key) => ({
  type: 'SET_CHECKED',
  key
})

export const sortByText = (direction) => ({
  type: 'SORT_BY_TEXT',
  direction
})

export const sortByDate = (direction) => ({
  type: 'SORT_BY_DATE',
  direction
})

export const setFilter = ({}) => ({
  type: 'SET_FILTER',
  direction
})